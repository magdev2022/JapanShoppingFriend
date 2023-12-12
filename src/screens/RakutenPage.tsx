import React from 'react'
import { Text, Button, IconElement, Icon, Card, Layout } from '@ui-kitten/components'
import { View, ScrollView, Image, Linking, useWindowDimensions } from 'react-native';
import DomParser from 'react-native-html-parser';
import Spinner from 'react-native-loading-spinner-overlay';

interface RankProduct {
  url: string,
  name: string,
  imgurl: string,
  price: string
}
const GiftIcon = (props: any): IconElement => (
  <Icon
    {...props}
    name='gift'
  />
);
const RakutenPage = () => {
  const [products, setProducts] = React.useState<RankProduct[]>([]);
  const [spinner, setspinner] = React.useState(false);

  const handleUpdateRanking = () => {
    setspinner(true);
    fetch('https://ranking.rakuten.co.jp/realtime/?l-id=ranking_sp_navi')
      .then(response => response.text())
      .then(text => {
        let doc = new DomParser.DOMParser().parseFromString(text, 'text/html')
        let rankDivs = doc.getElementsByAttribute('class', 'rnkRanking_itemName');
        let rankImgDivs = doc.getElementsByAttribute('class', 'rnkRanking_imageBox');
        let rankPrices = doc.getElementsByAttribute('class', 'rnkRanking_price');

        let newproducts: RankProduct[] = [];
        if (rankDivs.length > 0) {
          for (let index = 0; index < rankDivs.length; index++) {
            const element = rankDivs[index];
            let plink = element.getElementsByTagName('a');
            let imglink = rankImgDivs[index].getElementsByTagName('img');
            if (plink.length == 1 && imglink.length == 1) {
              let purl = plink[0].getAttribute('href');
              let pname = plink[0].textContent;
              let pimg = imglink[0].getAttribute('src');
              let pprice = rankPrices[index].textContent;
              let newproduct: RankProduct = {
                url: purl,
                name: pname,
                imgurl: pimg,
                price: pprice
              }
              newproducts.push(newproduct);
            }
          }
        }
        setProducts(newproducts);
        setspinner(false);
      })
      .catch(error => {
        console.error(error);
        setspinner(false);
      });

  }

  const renderItemFooter = (footerProps: any, product: RankProduct): React.ReactElement => (
    <View style={{ flexDirection: 'row' }}>    
      <Text style={{ justifyContent: 'flex-end', marginLeft: 'auto' }}>
        価格:{product.price}
      </Text>
    </View>
  );
  return (
    <View style={{justifyContent: 'space-between'}}>
      <Spinner
        visible={spinner}
        textContent={'更新中...'}
        textStyle={{ color: "#EEE" }}
        overlayColor='rgba(0, 0, 0, 0.6)'
      />
      <Button status='danger' accessoryLeft={GiftIcon} onPress={handleUpdateRanking}>ランキング表示</Button>
      <ScrollView>
        {products.map((product: RankProduct) => {
          return <Card
            // style={styles.card}
            footer={footerProps => renderItemFooter(footerProps, product)}
            status='basic'
            key={product.name}
          >
            <Layout style={{ flexDirection: 'row'}}>
            <Image
                style={{ width: 90, height: 90 }}
                source={{ uri: product.imgurl }}
              />
              <View style={{ flexDirection: 'column', marginRight:80 }}>
                <Text category='s2' style={{ marginLeft: 5, maxHeight: 60, height: 60}}>
                  {product.name}
                </Text>
                <View style={{flexDirection:'row'}}>
                  <Text category='h6' style={{marginLeft:5, color:"blue"}}>{products.indexOf(product) + 1}位</Text>
                  <Text onPress={() => Linking.openURL(product.url)} style={{justifyContent:'flex-end',marginLeft:'auto', color: 'rgb(0, 122, 255)', marginTop: 5 }}>商品ページへ移動</Text>
                </View>
              </View>             
            </Layout>
          </Card>
        })}
      </ScrollView>
    </View>
  )
}

export default RakutenPage