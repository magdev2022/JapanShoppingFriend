/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// import Launch from './src/screens/Launch';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AssetIconsPack } from './src/assets/AssetIcon'

import BlogPage from './src/screens/BlogPage';
import SettingPage from './src/screens/SettingPage';
import Home from './src/screens/Home';
import { View, Alert, StyleSheet, Pressable, Linking, TextInput, BackHandler } from 'react-native';
import { ImageBackground } from 'react-native';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { Socket, io } from "socket.io-client";
import notifee, { AndroidImportance, AndroidStyle, AuthorizationStatus, EventType } from '@notifee/react-native';
import RakutenPage from './src/screens/RakutenPage';
import MonitoringPage from './src/screens/MonitoringPage';
import { Dirs, FileSystem } from 'react-native-file-access';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Store } from './type';
import { encodeString, DecodeString, XORCipher } from './src/library/crypto';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { getUniqueId, getManufacturer, getDeviceId, isEmulator } from 'react-native-device-info';
import { APIURL } from './src/constants/Constant';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthContext = React.createContext<any>({});


// const SplashScreen = ({ navigation }: any) => {
//   const [show, setShow] = useState(false);
//   // mode login dan register    
//   const handleMode = () => {
//     return <Login navigation={navigation} />;
//   };
//   return (
//     <ImageBackground
//       source={require('./src/assets/img/Background.png')}
//       style={{ width: '100%', height: '100%' }}>
//       <StatusBar barStyle="light-content" />
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//         }}>
//         {!show && (
//           <Text
//             style={{
//               color: '#FFD93D',
//               fontSize: 30,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               shadowColor: '#000',
//             }}>
//             買い物友達
//           </Text>
//         )}
//       </View>
//       <TouchableOpacity
//         onPress={() => {
//           setShow(!show);
//         }}
//         style={{
//           backgroundColor: '#121515',
//           width: 50,
//           height: 5,
//           marginBottom: 15,
//           alignSelf: 'center',
//           borderRadius: 2.5,
//         }}
//       />
//       <View
//         style={
//           show === false
//             ? {
//               backgroundColor: '#121515',
//               padding: 20,
//             }
//             : {
//               backgroundColor: '#121515',
//               padding: 20,
//               height: '80%',
//             }
//         }>
//         {show === true && handleMode()}
//         {/* tombol show */}
//         {!show && (
//           <TouchableOpacity
//             onPress={() => {
//               setShow(!show);
//             }}>
//             <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
//               ログイン
//             </Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </ImageBackground>
//   )
// }

function timeout(delay: number) {
  return new Promise(res => setTimeout(() => { }, delay));
}

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('./src/assets/img/Background.png')}
      style={{ width: '100%', height: '100%' }}>
    </ImageBackground>
  )
}

const ScanScreen = ({ navigation }: any) => {
  const { signInWithQRCode } = React.useContext(AuthContext);
  const qrCodeSuccess = (e: any) => {
    const qrdata = e.data;
    signInWithQRCode(qrdata);
  };

  return (
    <QRCodeScanner
      onRead={qrCodeSuccess}
      containerStyle={{ backgroundColor: '#222' }}
      topContent={
        <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 'bold', width: 200, textAlign: 'center' }}>
          WiMBOTアプリからQRCODEをスキャンしてください。
        </Text>
      }
      bottomContent={
        <Button onPress={() => navigation.navigate('ログイン')}>取消</Button>
      }
    />)
}

const Login = ({ navigation }: any) => {
  const [license, setLicense] = React.useState("");  
  const { signIn, signTrial } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, backgroundColor: "#090209" }}>
      <Text category='h1' style={{ color: "#e800ff", margin: 10 }}>
        買い物友達
      </Text>
      <View style={{ justifyContent: 'center', flex: 1, margin: 10 }}>
        <Text
          style={{ color: '#fff', fontSize: 25 }}>
          ログイン
        </Text>
        <Text
          style={{ color: '#fff', fontSize: 12, marginTop: 5 }}>
          ライセンスキーを入力してください。
        </Text>
        <View
          style={{ margin: 10, display: 'flex', flexDirection: 'column', gap: 15 }}>
          <View
            style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <TextInput
              placeholder="LICENSE"
              secureTextEntry={false}
              dataDetectorTypes={'address'}
              cursorColor="black"
              style={{
                height: 40,
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 15,
                fontSize: 16,
              }}
              value={license}
              onChangeText={setLicense}
            />
          </View>        
          <View style={{ marginTop: 20, gap: 10 }}>
            <Button status='primary' onPress={() => signIn({ license })}>ログイン</Button>
            <Button status='info' appearance='outline' onPress={() => Linking.openURL("https://aiobotjp.com/users/sign_in")}>会員以外の方・登録</Button>
            {/* <Button status='success' onPress={() => navigation.navigate('QRCODE')}>QRコードログイン</Button> */}
            <Button status='warning' onPress={() => signTrial({})}>3日間無料体験</Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  const [init, setinit] = React.useState(true);
  // const [notifyUrl, setnotifyUrl] = React.useState("");
  const [isConnected, setisConnected] = React.useState(false);

  notifee.onBackgroundEvent(async ({ type, detail }) => {
    if (type === EventType.ACTION_PRESS && detail.pressAction?.id.includes('openlink')) {
      if (detail.notification?.body != undefined) {
        await Linking.openURL(detail.notification?.body);
      }
    }
  });

  notifee.onForegroundEvent(async ({ type, detail }) => {
    if (type === EventType.ACTION_PRESS && detail.pressAction?.id.includes('openlink')) {
      if (detail.notification?.body != undefined) {
        await Linking.openURL(detail.notification?.body);
      }
    }
  });


  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  async function onMonitorNotification(msg: any) {
    // Request permissions (required for iOS)    
    let userToken;
    try {
      let encrypted: any = await AsyncStorage.getItem("auth");
      if (encrypted != null) {
        let decrypted = DecodeString(encrypted);
        let userdata = JSON.parse(decrypted);
        let expired: any = new Date(userdata.expire);
        let curtime: any = new Date();
        let difftime = expired - curtime;
        if (difftime < 0) {
          userToken = "expired";
        } else {
          userToken = "authenticated";
        }
      }
    } catch (e) {
      // Restoring token failed
    }
    if (userToken != 'authenticated') {
      return
    }
    const logFilePath = Dirs.DocumentDir + "/" + "log.txt";
    let exist = await FileSystem.exists(logFilePath);

    let storeTxt = await AsyncStorage.getItem("monitorStores");
    if (storeTxt == null) {
      return
    }
    let monitorStores: Store[] = JSON.parse(storeTxt);
    if (monitorStores.length == 0) {
      return
    }
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    const msgObj = JSON.parse(msg);
    
    let store: string = msgObj.store.trim();
    if (store.includes(' ')) {
      store = store.split(' ')[0]
    }
    console.log(store);
    let url = msgObj.url;
    if (store == "everyone") {

    } else {
      // Display a notification
      let chkStoreExist = false;
      for (let index = 0; index < monitorStores.length; index++) {
        const element = monitorStores[index];
        if (element.value.toLowerCase().includes(store.toLocaleLowerCase())) {
          chkStoreExist = true;
          break;
        }
      }
      console.log("Store Exist?:", chkStoreExist);
      if (chkStoreExist) {
        console.log("try sending notification");
        await notifee.displayNotification({
          title: "<b>" + store + "</b>",
          subtitle: msgObj.name,
          body: msgObj.url,
          android: {
            channelId,          
            actions: [
              {
                title: '製品ページへ',
                pressAction: {
                  id: 'openlink',
                },
              },
            ],
          },
        });
        console.log("send notification");
        let logdata = JSON.stringify({
          store: store,
          url: url,
          name: msgObj.name,
          stock: msgObj.stock,
          date: new Date()
        });
        if (exist) {
          await FileSystem.appendFile(logFilePath, logdata + "\n", 'utf8');
        } else {
          await FileSystem.writeFile(logFilePath, logdata + "\n", 'utf8');
        }
      }
    }
  }

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        let deviceID = await getUniqueId();
        console.log(deviceID);        
        return await fetch('https://api.whop.com/api/v2/memberships/' + data.license + '/validate_license', {
          method: 'POST',
          headers: {accept: 'application/json', Authorization: 'Bearer LafdKTSR6OCjT5SsrwtwNOAHi9NeXbrDD1_wqnz40ws', 'content-type': 'application/json'},
          body: JSON.stringify({metadata: {hwid: deviceID}})
        }).
          then((res) => res.json()).
          then(json => {
            let login_res = false;
            if (json.valid == true) {
              login_res = true;
            }
            if (login_res == true) {
              // 1000 * 60 * 60 * 24 * 
              let expiredate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
              let userdata = {
                'license': data.license,                
                'name': json.discord.username,
                'expire': expiredate.toString()
              }
              let user_text = JSON.stringify(userdata);
              let encrypted = encodeString(user_text);
              AsyncStorage.setItem("auth", encrypted).then((res) => { console.log(res) }).catch((err) => { console.log(err) });
              console.log("save login session");
              dispatch({ type: 'SIGN_IN', token: 'authenticated' });
            } else {
              Alert.alert('エラー', 'ログインに失敗しました!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]);
            }
          }).catch((err) => {
            console.log("Login Failed");
          })
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signInWithQRCode: async (qrcode: string) => {
        console.log(qrcode.split(';')[0]);
        console.log(qrcode.split(';')[1]);
        var username = qrcode.split(';')[2];
        let log_date: any = new Date(qrcode.split(';')[1]);
        let cur_date: any = new Date();
        let diff = cur_date - log_date;
        let diff_h = Math.floor(diff / (1000 * 60));
        if (diff_h > 3) {
          Alert.alert('エラー', 'QRコードの有効期限が切れています。!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        } else {
          if (qrcode.includes('authentication')) {
            let expiredate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)
            let userdata = {
              'email': username,
              'pass': "",
              'expire': expiredate.toString()
            }
            let user_text = JSON.stringify(userdata);
            let encrypted = encodeString(user_text);
            AsyncStorage.setItem("auth", encrypted).then((res) => { console.log(res) }).catch((err) => { console.log(err) });
            console.log("save login session");
            dispatch({ type: 'SIGN_IN', token: 'authenticated' });
          }
        }
      },
      signTrial: async () => {
        let deviceID = await getUniqueId();
        //check device
        let chkResp = await fetch(APIURL + '/api/trial/' + deviceID);
        if (chkResp.status == 200) {
          let jsondata = await chkResp.json();
          let starttime = jsondata.starttime;
          let curtime = Date.now();
          let difftime = (curtime - starttime) / 1000 / 60 / 60 / 24;
          console.log(difftime);
          if (difftime > 3) {
            Alert.alert('エラー', '無料お試し期間は終了しました!', [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          } else {
            let expiredate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)
            let userdata = {
              'email': 'freetrial',
              'pass': '',
              'expire': expiredate.toString()
            }
            let user_text = JSON.stringify(userdata);
            let encrypted = encodeString(user_text);
            AsyncStorage.setItem("auth", encrypted).then((res) => { console.log(res) }).catch((err) => { console.log(err) });
            dispatch({ type: 'SIGN_IN', token: 'authenticated' });
          }
        } else {
          let data = {
            device: deviceID,
            starttime: Date.now()
          }
          let setResp = await fetch(APIURL + '/api/trial/add',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
            });
          if (setResp.status == 201) {
            let expiredate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)
            let userdata = {
              'email': 'Free Trial',
              'pass': '',
              'expire': expiredate.toString()
            }
            let user_text = JSON.stringify(userdata);
            let encrypted = encodeString(user_text);
            AsyncStorage.setItem("auth", encrypted).then((res) => { console.log(res) }).catch((err) => { console.log(err) });
            dispatch({ type: 'SIGN_IN', token: 'authenticated' });
          } else {
            Alert.alert('エラー', 'エラーが発生しました!', [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          }
        }
      }
    }),
    []
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place    
    const bootstrapAsync = async () => {
      let isemulator = await isEmulator();
      if (isemulator) {
        BackHandler.exitApp();
      }
      const settings = await notifee.getNotificationSettings();
      if (settings.authorizationStatus == AuthorizationStatus.AUTHORIZED) {
        console.log('Notification permissions has been authorized');
      } else if (settings.authorizationStatus == AuthorizationStatus.DENIED) {
        console.log('Notification permissions has been denied');
      }
      let userToken;
      try {
        let encrypted: any = await AsyncStorage.getItem("auth");
        if (encrypted != null) {
          let decrypted = DecodeString(encrypted);
          let userdata = JSON.parse(decrypted);
          let expired: any = new Date(userdata.expire);
          let curtime: any = new Date();
          let difftime = expired - curtime;
          if (difftime < 0) {
            userToken = "expired";
          } else {
            userToken = "authenticated";
          }
        }
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  React.useEffect(() => {
    if (init) {
      if (!isConnected) {
        const socket = io("ws://13.230.88.204/");
        socket.on("connect", () => {
          console.log("connected", socket.id);
          setisConnected(true);
        });
        socket.on("disconnect", () => {
          console.log("disconnected");
          setisConnected(false);
        });
        socket.on("postinfo", msg => {
          onMonitorNotification(msg);
        })
      }
    }
    setinit(false);
  })

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem label={({ focused, color }) => <Text style={{ color }} category='h4'>買い物友達</Text>} onPress={() => { }} />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {
            state.isLoading ? (
              <SplashScreen />
            ) :
              state.userToken == "authenticated" ? <Drawer.Navigator initialRouteName="記事一覧" drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="記事一覧" component={BlogPage} />
                <Drawer.Screen name="モニタリングサービス" component={MonitoringPage} />
                <Drawer.Screen name="楽天市場" component={RakutenPage} />
                <Drawer.Screen name="設定" component={SettingPage} />
                <Drawer.Screen name="マイページ" component={Home} />
              </Drawer.Navigator> :
                <Stack.Navigator screenOptions={{
                  headerShown: false
                }}>
                  <Stack.Screen name="ログイン" component={Login} />
                  <Stack.Screen name="マイページ" component={Home} />
                  {/* <Stack.Screen name="QRCODE" component={ScanScreen} /> */}
                </Stack.Navigator>
          }
        </NavigationContainer>
      </ApplicationProvider>
    </AuthContext.Provider>
  );
};
export default App;
