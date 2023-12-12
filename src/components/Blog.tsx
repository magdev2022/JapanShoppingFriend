import React from 'react';
import { View, Image, ScrollView, Linking, Modal, Alert } from 'react-native';
import { Button, Card, Text, IconElement, Icon } from '@ui-kitten/components';
import { BlogData } from '../../type';
import { Rating } from 'react-native-ratings';
import DomParser from 'react-native-html-parser';

const renderItemHeader = (headerProps: any, info: BlogData): React.ReactElement => (
  <View {...headerProps}>
    <View style={{ flexDirection: 'row' }}>
      <Text category='h6'>
        {info.store}
      </Text>
      {isNaN(Number(info.rating)) ?
        <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
          startingValue={4}
          style={{ marginLeft: 'auto' }}
        /> : <Rating
          type='star'
          ratingCount={Number(info.rating)}
          imageSize={20}
          startingValue={4}
          style={{ marginLeft: 'auto' }}
        />}

    </View>
    <Text category='label' style={{ marginTop: 5 }}>
      {info.title}
    </Text>
  </View>
);
interface IBlog {
  info: BlogData
}
const CloseIcon = (props: any): IconElement => (
  <Icon
    {...props}
    name='close'
  />
);



const renderItemFooter = (footerProps: any, info: BlogData): React.ReactElement => (
  <View style={{ flexDirection: 'row' }}>
    {/* <Text>
      {info.datatype}
    </Text> */}
    <Text style={{ justifyContent: 'flex-end', marginLeft: 'auto' }}>
      {new Date(info.date).toLocaleString("ja-jp")}
    </Text>
  </View>
);
export const Blog = ({ info }: IBlog): React.ReactElement => {
  const [showDetail, setShowDetail] = React.useState(false);
  const [resellprice, setResellPrice] = React.useState("");
  const handleCheckPrice = () => {
    if (info.sku == null || info.sku == "") {
      Alert.alert("再販価格はまだ見つかりません。");
      return;
    }

    fetch('https://snkrdunk.com/products/' + info.sku)
      .then(response => response.text())
      .then(text => {
        let doc = new DomParser.DOMParser().parseFromString(text, 'text/html')
        let priceDivs = doc.getElementsByAttribute('class', 'product-price-block');
        for (let index = 0; index < priceDivs.length; index++) {
          const element = priceDivs[index];
          if (element.textContent.includes('新品')) {
            let pricetags = element.getElementsByAttribute('class', 'product-lowest-price');
            let price = pricetags[0].textContent.trim()
            setResellPrice(price);
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View key={info.title}>
      <Card
        // style={styles.card}
        status='basic'
        header={headerProps => renderItemHeader(headerProps, info)}
        footer={footerProps => renderItemFooter(footerProps, info)}
        onPress={() => setShowDetail(true)}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{ uri: info.image }}
          />
          <ScrollView>
            <Text category='s2' style={{ marginLeft: 5, maxHeight: 80 }}>
              {info.body}
            </Text>
          </ScrollView>
        </View>
      </Card>
      <Modal
        visible={showDetail}
        animationType='fade'>
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <Image
              style={{
                width: '100%',
                height: undefined,
                aspectRatio: 1,
                borderRadius: 5
              }}
              resizeMethod="scale"
              source={{ uri: info.image }}
            />
            <Text category='s2' style={{ marginTop: 10 }} >
              {info.body}
            </Text>
          </ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <Text category='h6'>SKU:</Text>
            <Text category='h6'>{info.sku.toUpperCase()}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: "#222", borderRadius: 5, padding: 10 }}>
            <View>
              <Text style={{ color: "#FF4555", fontWeight: 'bold' }}>定価: {info.price}</Text>
              <Text style={{ marginTop: 5, color: "#FF4555", fontWeight: 'bold' }}>再販価: {">"}{resellprice}</Text>
            </View>
            <Button size='small' style={{ justifyContent: 'flex-end', marginLeft: 'auto' }} onPress={handleCheckPrice}>再販価格を確認</Button>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5, backgroundColor: "#222", borderRadius: 5, padding: 10 }}>
            {info.selltype == "-" ? <Text></Text> : <View><Text style={{ color: "#32DD55", fontWeight: 'bold' }}>販売方法:{info.selltype}</Text></View>}
          </View>
          <Text onPress={() => Linking.openURL(info.url)} style={{ color: 'blue', marginTop: 15 }}>商品ページへ移動</Text>
          <Button style={{ marginTop: 15 }} onPress={() => setShowDetail(false)} size='medium' status='danger' accessoryLeft={CloseIcon}>
            閉じる
          </Button>
        </View>
      </Modal>
    </View>
  )
};
