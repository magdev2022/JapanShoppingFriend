import React from 'react'
import { CheckBox, IndexPath, Select, SelectItem, SelectGroup, Text, Layout, Card, Button, IconElement, Icon, Radio, RadioGroup, Divider } from '@ui-kitten/components'
import { View, useWindowDimensions, StyleSheet, Modal, Alert, ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORELIST } from '../constants/Constant';
import SelectMultiple from 'react-native-select-multiple'
import { Dirs, FileSystem } from 'react-native-file-access';
import SelectDropdown from 'react-native-select-dropdown'
import { Store } from '../../type';

interface MonitorLog {
    store: string,
    url: string,
    name: string,
    date: string,
    stock: number
}
interface IMonitorLog {
    data: MonitorLog
}

const LogCard = ({ data }: IMonitorLog): React.ReactElement => {
    return (
        <Card status='basic'>
            <Layout>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{data.store}</Text>
                <Divider />
                <Text category='s2'>{new Date(data.date).toLocaleString("ja-jp")}</Text>
                <Text category='label' style={{ marginLeft: 5, maxHeight: 80 }}>
                    {data.name}
                </Text>
                <Layout style={{ flexDirection: 'row' }}>
                    {
                        data.stock == 1 ? <Text style={{ fontSize: 14, fontWeight: 'bold', color: "#67BB34", marginTop: 5 }}>在庫あり</Text> : <Text style={{ fontSize: 14, fontWeight: 'bold', color: "#FF2345", marginTop: 5 }}>在庫切れ</Text>
                    }
                    <Text onPress={() => Linking.openURL(data.url)} style={{ justifyContent: 'flex-end', marginLeft: 'auto', color: 'blue', marginTop: 10 }}>商品ページへ移動</Text>
                </Layout>
            </Layout>
        </Card>
    )
}

const TimeQuries = ['1日以内', '12時間以内', '1時間以内'];
const StockQuries = ['すべての製品', '在庫あり', '在庫切れ'];

const MonitoringPage = () => {
    const [selectItems, setSelectItems] = React.useState<Store[]>([]);
    const [logList, setLogList] = React.useState<MonitorLog[]>([]);
    const [logFilteredList, setLogFilteredList] = React.useState<MonitorLog[]>([]);
    const [logTimeMode, setLogTimeMode] = React.useState(0);
    const [logStockMode, setLogStockMode] = React.useState(0);
    const [init, setinit] = React.useState(true);

    React.useEffect(() => {
        if (init) {
            AsyncStorage.getItem("monitorStores").then((storetext) => {
                if (storetext != null) {
                    let monitorStores: Store[] = JSON.parse(storetext);
                    setSelectItems(monitorStores);
                }
                setinit(false);
            }).catch((err) => {
                console.log(err);
                setinit(false);
            });
        }
    });

    const renderLabel = (label: string) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginLeft: 4 }}>
                    <Text category='s2'>{label}</Text>
                </View>
            </View>
        )
    }
    const SyncIcon = (props: any): IconElement => (
        <Icon {...props} name='sync' />
    );

    const [modalVisible, setModalVisible] = React.useState(false);
    const ShoppingIcon = (props: any): IconElement => (
        <Icon
            {...props}
            name='shopping-bag'
        />
    );
    const CloseIcon = (props: any): IconElement => (
        <Icon
            {...props}
            name='close-square'
        />
    );


    const handleUpdateLogs = async () => {
        const logFilePath = Dirs.DocumentDir + "/" + "log.txt";
        const existLog = await FileSystem.exists(logFilePath);
        if (existLog) {
            const logstr = await FileSystem.readFile(logFilePath);

            let logs = logstr.split('\n');
            let newlogs = [];
            for (let index = 0; index < logs.length; index++) {
                let log = logs[index];
                if (log.includes('{')) {
                    try {
                        let log_obj = JSON.parse(log);
                        let log_date: any = new Date(log_obj.date);
                        let cur_date: any = new Date();
                        let diff = cur_date - log_date;
                        let diff_h = Math.floor(diff / (1000 * 60 * 60));
                        if (diff_h < 24) {
                            newlogs.push(log_obj);
                        }
                    } catch (error) {

                    }
                }
            }            
            await FileSystem.writeFile(logFilePath, "");
            for (let index = 0; index < newlogs.length; index++) {
                const element = newlogs[index];
                await FileSystem.appendFile(logFilePath, JSON.stringify(element) + "\n", 'utf8');
            }            
            newlogs.reverse();
            setLogList(newlogs);
            setLogFilteredList(newlogs);
        } else {
            setLogList([]);
            setLogFilteredList([]);
        }

    }
    const handleChangeLogMode = (timevalue: number, stockvalue: number) => {
        let newlogs = [];
        for (let index = 0; index < logList.length; index++) {
            const element = logList[index];
            let log_date: any = new Date(element.date);
            let cur_date: any = new Date();
            let diff = cur_date - log_date;
            let diff_h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let cuttime = 24;
            if (timevalue == 0) {
                cuttime = 24;
            } else if (timevalue == 1) {
                cuttime = 12;
            } else if (timevalue == 2) {
                cuttime = 1;
            }
            if (diff_h < cuttime) {
                if (stockvalue == 0) {
                    newlogs.push(element);
                } else if (stockvalue == 1 && element.stock == 1) {
                    newlogs.push(element);
                } else if (stockvalue == 2 && element.stock == 0) {
                    newlogs.push(element);
                }
            }
        }
        setLogFilteredList(newlogs);
    }

    const saveSelectedStores = (items: Store[]) => {
        AsyncStorage.setItem("monitorStores", JSON.stringify(items));
    }

    return (
        <Layout>
            <View style={{ height: "100%" }}>
                <Button
                    style={{ marginLeft: 10, marginRight: 10 }}
                    onPress={() => { setModalVisible(true) }}
                    accessoryLeft={ShoppingIcon}>
                    取り扱い店舗一覧
                </Button>
                <Text
                    style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }} category='h6'>最近再入荷情報</Text>
                <Layout style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <SelectDropdown
                        defaultButtonText="時間選択"
                        data={TimeQuries}
                        onSelect={(selectedItem, index) => {
                            setLogTimeMode(index);
                            handleChangeLogMode(index, logStockMode);
                        }}
                        buttonStyle={selectstyles.dropdown2BtnStyle}
                        buttonTextStyle={selectstyles.dropdown2BtnTxtStyle}
                        dropdownIconPosition={'right'}
                        dropdownStyle={selectstyles.dropdown2DropdownStyle}
                        rowStyle={selectstyles.dropdown2RowStyle}
                        rowTextStyle={selectstyles.dropdown2RowTxtStyle}
                        selectedRowStyle={selectstyles.dropdown2SelectedRowStyle}
                    />
                    <SelectDropdown
                        defaultButtonText="在庫状況"
                        data={StockQuries}
                        onSelect={(selectedItem, index) => {
                            setLogStockMode(index);
                            handleChangeLogMode(logTimeMode, index);
                        }}
                        buttonStyle={selectstyles.dropdown2BtnStyle}
                        buttonTextStyle={selectstyles.dropdown2BtnTxtStyle}
                        dropdownIconPosition={'right'}
                        dropdownStyle={selectstyles.dropdown2DropdownStyle}
                        rowStyle={selectstyles.dropdown2RowStyle}
                        rowTextStyle={selectstyles.dropdown2RowTxtStyle}
                        selectedRowStyle={selectstyles.dropdown2SelectedRowStyle}
                    />
                    <Button
                        appearance='ghost'
                        status='primary'
                        accessoryLeft={SyncIcon}
                        onPress={handleUpdateLogs}
                        style={{ justifyContent: 'flex-end', marginLeft: 'auto' }}
                    />
                </Layout>
                <View>
                    <ScrollView>
                        {logFilteredList.map((log: MonitorLog) => {
                            return <LogCard data={log} key={log.date} />
                        })}
                    </ScrollView>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modalView}>
                        <Button
                            style={{ justifyContent: 'flex-end', marginLeft: 'auto', marginTop: 0 }}
                            size='large'
                            appearance='ghost'
                            status='danger'
                            onPress={() => setModalVisible(false)}
                            accessoryLeft={CloseIcon}
                        />
                        <Text category='h6'>ストアを選択</Text>
                        <SelectMultiple
                            style={{ width: "100%", height: "80%" }}
                            items={STORELIST}
                            selectedItems={selectItems}
                            renderLabel={renderLabel}
                            onSelectionsChange={(items: any) => { setSelectItems(items); saveSelectedStores(items) }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Button
                                style={styles.footerControl}
                                size='small'
                                status='success'
                                onPress={() => { setSelectItems(STORELIST); saveSelectedStores(STORELIST) }}
                            >
                                すべて選択
                            </Button>
                            <Button
                                style={styles.footerControl}
                                size='small'
                                status='danger'
                                onPress={() => { setSelectItems([]); saveSelectedStores([]) }}
                            >
                                選択解除
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 5,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginTop: 20,
        width: 100,
        marginLeft: 10,
    },
    modalView: {
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

});

const selectstyles = StyleSheet.create({
    dropdown2BtnStyle: {
        //width: '80%',
        height: 40,
        width: '35%',
        margin: 5,
        backgroundColor: '#2323FF77',
        borderRadius: 8,
        fontSize: 14,
    },
    dropdown2BtnTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    dropdown2DropdownStyle: {
        backgroundColor: '#EEE',
        borderRadius: 10,
        color: "black",
        fontSize: 14,
    },
    dropdown2RowStyle: { backgroundColor: '#EEE', borderBottomColor: '#C5C5C5', color: "black", },
    dropdown2RowTxtStyle: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    dropdown2SelectedRowStyle: { backgroundColor: 'rgba(255,255,255,0.2)' },
    dropdown2searchInputStyleStyle: {
        backgroundColor: '#444',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        fontSize: 14,
    },
});
export default MonitoringPage;