  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[3]);
  var _reactNativeHtmlParser = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNativeLoadingSpinnerOverlay = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[5]));
  var GiftIcon = function GiftIcon(props) {
    return (0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Icon, Object.assign({}, props, {
      name: "gift"
    }));
  };
  var RakutenPage = function RakutenPage() {
    var _React$useState = _react.default.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      products = _React$useState2[0],
      setProducts = _React$useState2[1];
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      spinner = _React$useState4[0],
      setspinner = _React$useState4[1];
    var handleUpdateRanking = function handleUpdateRanking() {
      setspinner(true);
      fetch('https://ranking.rakuten.co.jp/realtime/?l-id=ranking_sp_navi').then(function (response) {
        return response.text();
      }).then(function (text) {
        var doc = new _reactNativeHtmlParser.default.DOMParser().parseFromString(text, 'text/html');
        var rankDivs = doc.getElementsByAttribute('class', 'rnkRanking_itemName');
        var rankImgDivs = doc.getElementsByAttribute('class', 'rnkRanking_imageBox');
        var rankPrices = doc.getElementsByAttribute('class', 'rnkRanking_price');
        var newproducts = [];
        if (rankDivs.length > 0) {
          for (var index = 0; index < rankDivs.length; index++) {
            var element = rankDivs[index];
            var plink = element.getElementsByTagName('a');
            var imglink = rankImgDivs[index].getElementsByTagName('img');
            if (plink.length == 1 && imglink.length == 1) {
              var purl = plink[0].getAttribute('href');
              var pname = plink[0].textContent;
              var pimg = imglink[0].getAttribute('src');
              var pprice = rankPrices[index].textContent;
              var newproduct = {
                url: purl,
                name: pname,
                imgurl: pimg,
                price: pprice
              };
              newproducts.push(newproduct);
            }
          }
        }
        setProducts(newproducts);
        setspinner(false);
      }).catch(function (error) {
        console.error(error);
        setspinner(false);
      });
    };
    var renderItemFooter = function renderItemFooter(footerProps, product) {
      return (0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_reactNative.View, {
        style: {
          flexDirection: 'row'
        },
        children: (0, _$$_REQUIRE(_dependencyMap[6]).jsxs)(_$$_REQUIRE(_dependencyMap[7]).Text, {
          style: {
            justifyContent: 'flex-end',
            marginLeft: 'auto'
          },
          children: ["\u4FA1\u683C:", product.price]
        })
      });
    };
    return (0, _$$_REQUIRE(_dependencyMap[6]).jsxs)(_reactNative.View, {
      style: {
        justifyContent: 'space-between'
      },
      children: [(0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_reactNativeLoadingSpinnerOverlay.default, {
        visible: spinner,
        textContent: '更新中...',
        textStyle: {
          color: "#EEE"
        },
        overlayColor: "rgba(0, 0, 0, 0.6)"
      }), (0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Button, {
        status: "danger",
        accessoryLeft: GiftIcon,
        onPress: handleUpdateRanking,
        children: "\u30E9\u30F3\u30AD\u30F3\u30B0\u8868\u793A"
      }), (0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_reactNative.ScrollView, {
        children: products.map(function (product) {
          return (0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Card, {
            footer: function footer(footerProps) {
              return renderItemFooter(footerProps, product);
            },
            status: "basic",
            children: (0, _$$_REQUIRE(_dependencyMap[6]).jsxs)(_$$_REQUIRE(_dependencyMap[7]).Layout, {
              style: {
                flexDirection: 'row'
              },
              children: [(0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_reactNative.Image, {
                style: {
                  width: 90,
                  height: 90
                },
                source: {
                  uri: product.imgurl
                }
              }), (0, _$$_REQUIRE(_dependencyMap[6]).jsxs)(_reactNative.View, {
                style: {
                  flexDirection: 'column',
                  marginRight: 80
                },
                children: [(0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Text, {
                  category: "s2",
                  style: {
                    marginLeft: 5,
                    maxHeight: 60,
                    height: 60
                  },
                  children: product.name
                }), (0, _$$_REQUIRE(_dependencyMap[6]).jsxs)(_reactNative.View, {
                  style: {
                    flexDirection: 'row'
                  },
                  children: [(0, _$$_REQUIRE(_dependencyMap[6]).jsxs)(_$$_REQUIRE(_dependencyMap[7]).Text, {
                    category: "h6",
                    style: {
                      marginLeft: 5,
                      color: "blue"
                    },
                    children: [products.indexOf(product) + 1, "\u4F4D"]
                  }), (0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Text, {
                    onPress: function onPress() {
                      return _reactNative.Linking.openURL(product.url);
                    },
                    style: {
                      justifyContent: 'flex-end',
                      marginLeft: 'auto',
                      color: 'rgb(0, 122, 255)',
                      marginTop: 5
                    },
                    children: "\u5546\u54C1\u30DA\u30FC\u30B8\u3078\u79FB\u52D5"
                  })]
                })]
              })]
            })
          }, product.name);
        })
      })]
    });
  };
  var _default = RakutenPage;
  exports.default = _default;
