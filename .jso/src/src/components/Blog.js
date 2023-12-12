  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Blog = undefined;
  var _slicedToArray2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[3]);
  var renderItemHeader = function renderItemHeader(headerProps, info) {
    return (0, _$$_REQUIRE(_dependencyMap[4]).jsxs)(_reactNative.View, Object.assign({}, headerProps, {
      children: [(0, _$$_REQUIRE(_dependencyMap[4]).jsxs)(_reactNative.View, {
        style: {
          flexDirection: 'row'
        },
        children: [(0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Text, {
          category: "h6",
          children: info.store
        }), isNaN(Number(info.rating)) ? (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Rating, {
          type: "star",
          ratingCount: 5,
          imageSize: 20,
          startingValue: 4,
          style: {
            marginLeft: 'auto'
          }
        }) : (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Rating, {
          type: "star",
          ratingCount: Number(info.rating),
          imageSize: 20,
          startingValue: 4,
          style: {
            marginLeft: 'auto'
          }
        })]
      }), (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Text, {
        category: "label",
        style: {
          marginTop: 5
        },
        children: info.title
      })]
    }));
  };
  var CloseIcon = function CloseIcon(props) {
    return (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Icon, Object.assign({}, props, {
      name: "close"
    }));
  };
  var renderItemFooter = function renderItemFooter(footerProps, info) {
    return (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_reactNative.View, {
      style: {
        flexDirection: 'row'
      },
      children: (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Text, {
        style: {
          justifyContent: 'flex-end',
          marginLeft: 'auto'
        },
        children: new Date(info.date).toLocaleString("ja-jp")
      })
    });
  };
  var Blog = function Blog(_ref) {
    var info = _ref.info;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      showDetail = _React$useState2[0],
      setShowDetail = _React$useState2[1];
    return (0, _$$_REQUIRE(_dependencyMap[4]).jsxs)(_reactNative.View, {
      children: [(0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Card, {
        status: "basic",
        header: function header(headerProps) {
          return renderItemHeader(headerProps, info);
        },
        footer: function footer(footerProps) {
          return renderItemFooter(footerProps, info);
        },
        onPress: function onPress() {
          return setShowDetail(true);
        },
        children: (0, _$$_REQUIRE(_dependencyMap[4]).jsxs)(_reactNative.View, {
          style: {
            flexDirection: 'row'
          },
          children: [(0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_reactNative.Image, {
            style: {
              width: 80,
              height: 80
            },
            source: {
              uri: info.image
            }
          }), (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_reactNative.ScrollView, {
            children: (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Text, {
              category: "s2",
              style: {
                marginLeft: 5,
                maxHeight: 80
              },
              children: info.body
            })
          })]
        })
      }), (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_reactNative.Modal, {
        visible: showDetail,
        animationType: "fade",
        children: (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Card, {
          status: "basic",
          header: function header(headerProps) {
            return renderItemHeader(headerProps, info);
          },
          children: (0, _$$_REQUIRE(_dependencyMap[4]).jsxs)(_reactNative.View, {
            style: {
              maxHeight: 500
            },
            children: [(0, _$$_REQUIRE(_dependencyMap[4]).jsxs)(_reactNative.ScrollView, {
              contentContainerStyle: {
                flexGrow: 1
              },
              style: {
                flexGrow: 1
              },
              children: [(0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_reactNative.Image, {
                style: {
                  width: '100%',
                  height: undefined,
                  aspectRatio: 1
                },
                resizeMethod: "scale",
                source: {
                  uri: info.image
                }
              }), (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Text, {
                category: "s2",
                style: {
                  maxHeight: 100,
                  marginTop: 5
                },
                children: info.body
              })]
            }), info.selltype == "-" ? (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Text, {}) : (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_reactNative.View, {
              children: (0, _$$_REQUIRE(_dependencyMap[4]).jsxs)(_$$_REQUIRE(_dependencyMap[5]).Text, {
                style: {
                  color: "#FF2345",
                  fontWeight: 'bold',
                  marginTop: 10
                },
                children: ["\u8CA9\u58F2\u65B9\u6CD5:", info.selltype]
              })
            }), (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Text, {
              onPress: function onPress() {
                return _reactNative.Linking.openURL(info.url);
              },
              style: {
                color: 'blue',
                marginTop: 5
              },
              children: "\u5546\u54C1\u30DA\u30FC\u30B8\u3078\u79FB\u52D5"
            }), (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_$$_REQUIRE(_dependencyMap[5]).Button, {
              style: {
                marginTop: 10
              },
              onPress: function onPress() {
                return setShowDetail(false);
              },
              size: "small",
              accessoryLeft: CloseIcon,
              children: "\u9589\u3058\u308B"
            })]
          })
        })
      })]
    }, info.title);
  };
  exports.Blog = Blog;
