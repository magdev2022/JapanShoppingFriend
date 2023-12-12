  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[2]));
  var _react = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _asyncStorage = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[5]));
  var _reactNativeSelectMultiple = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[6]));
  var _reactNativeSelectDropdown = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[7]));
  var LogCard = function LogCard(_ref) {
    var data = _ref.data;
    return (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Card, {
      status: "basic",
      children: (0, _$$_REQUIRE(_dependencyMap[8]).jsxs)(_$$_REQUIRE(_dependencyMap[9]).Layout, {
        children: [(0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
          style: {
            fontWeight: 'bold',
            fontSize: 14
          },
          children: data.store
        }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Divider, {}), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
          category: "s2",
          children: new Date(data.date).toLocaleString("ja-jp")
        }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
          category: "label",
          style: {
            marginLeft: 5,
            maxHeight: 80
          },
          children: data.name
        }), (0, _$$_REQUIRE(_dependencyMap[8]).jsxs)(_$$_REQUIRE(_dependencyMap[9]).Layout, {
          style: {
            flexDirection: 'row'
          },
          children: [data.stock == 1 ? (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
            style: {
              fontSize: 14,
              fontWeight: 'bold',
              color: "#67BB34",
              marginTop: 5
            },
            children: "\u5728\u5EAB\u3042\u308A"
          }) : (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
            style: {
              fontSize: 14,
              fontWeight: 'bold',
              color: "#FF2345",
              marginTop: 5
            },
            children: "\u5728\u5EAB\u5207\u308C"
          }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
            onPress: function onPress() {
              return _reactNative.Linking.openURL(data.url);
            },
            style: {
              justifyContent: 'flex-end',
              marginLeft: 'auto',
              color: 'blue',
              marginTop: 10
            },
            children: "\u5546\u54C1\u30DA\u30FC\u30B8\u3078\u79FB\u52D5"
          })]
        })]
      })
    });
  };
  var TimeQuries = ['1日以内', '12時間以内', '1時間以内'];
  var StockQuries = ['すべての製品', '在庫あり', '在庫切れ'];
  var MonitoringPage = function MonitoringPage() {
    var _React$useState = _react.default.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      selectItems = _React$useState2[0],
      setSelectItems = _React$useState2[1];
    var _React$useState3 = _react.default.useState([]),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      logList = _React$useState4[0],
      setLogList = _React$useState4[1];
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      logFilteredList = _React$useState6[0],
      setLogFilteredList = _React$useState6[1];
    var _React$useState7 = _react.default.useState(0),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      logTimeMode = _React$useState8[0],
      setLogTimeMode = _React$useState8[1];
    var _React$useState9 = _react.default.useState(0),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      logStockMode = _React$useState10[0],
      setLogStockMode = _React$useState10[1];
    var _React$useState11 = _react.default.useState(true),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      init = _React$useState12[0],
      setinit = _React$useState12[1];
    _react.default.useEffect(function () {
      if (init) {
        _asyncStorage.default.getItem("monitorStores").then(function (storetext) {
          if (storetext != null) {
            var monitorStores = JSON.parse(storetext);
            setSelectItems(monitorStores);
          }
          setinit(false);
        }).catch(function (err) {
          console.log(err);
          setinit(false);
        });
      }
    });
    var renderLabel = function renderLabel(label) {
      return (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_reactNative.View, {
        style: {
          flexDirection: 'row',
          alignItems: 'center'
        },
        children: (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_reactNative.View, {
          style: {
            marginLeft: 4
          },
          children: (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
            category: "s2",
            children: label
          })
        })
      });
    };
    var SyncIcon = function SyncIcon(props) {
      return (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Icon, Object.assign({}, props, {
        name: "sync"
      }));
    };
    var _React$useState13 = _react.default.useState(false),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      modalVisible = _React$useState14[0],
      setModalVisible = _React$useState14[1];
    var ShoppingIcon = function ShoppingIcon(props) {
      return (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Icon, Object.assign({}, props, {
        name: "shopping-bag"
      }));
    };
    var CloseIcon = function CloseIcon(props) {
      return (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Icon, Object.assign({}, props, {
        name: "close-square"
      }));
    };
    var handleUpdateLogs = function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* () {
        var logFilePath = _$$_REQUIRE(_dependencyMap[10]).Dirs.DocumentDir + "/" + "log.txt";
        var existLog = yield _$$_REQUIRE(_dependencyMap[10]).FileSystem.exists(logFilePath);
        if (existLog) {
          var logstr = yield _$$_REQUIRE(_dependencyMap[10]).FileSystem.readFile(logFilePath);
          var logs = logstr.split('\n');
          var newlogs = [];
          for (var index = 0; index < logs.length; index++) {
            var log = logs[index];
            if (log.includes('{')) {
              try {
                var log_obj = JSON.parse(log);
                var log_date = new Date(log_obj.date);
                var cur_date = new Date();
                var diff = cur_date - log_date;
                var diff_h = Math.floor(diff / 3600000);
                if (diff_h < 24) {
                  newlogs.push(log_obj);
                }
              } catch (error) {}
            }
          }
          yield _$$_REQUIRE(_dependencyMap[10]).FileSystem.writeFile(logFilePath, "");
          for (var _index = 0; _index < newlogs.length; _index++) {
            var element = newlogs[_index];
            yield _$$_REQUIRE(_dependencyMap[10]).FileSystem.appendFile(logFilePath, JSON.stringify(element) + "\n", 'utf8');
          }
          newlogs.reverse();
          setLogList(newlogs);
          setLogFilteredList(newlogs);
        } else {
          setLogList([]);
          setLogFilteredList([]);
        }
      });
      return function handleUpdateLogs() {
        return _ref2.apply(this, arguments);
      };
    }();
    var handleChangeLogMode = function handleChangeLogMode(timevalue, stockvalue) {
      var newlogs = [];
      for (var index = 0; index < logList.length; index++) {
        var element = logList[index];
        var log_date = new Date(element.date);
        var cur_date = new Date();
        var diff = cur_date - log_date;
        var diff_h = Math.floor(diff % 86400000 / 3600000);
        var cuttime = 24;
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
    };
    var saveSelectedStores = function saveSelectedStores(items) {
      _asyncStorage.default.setItem("monitorStores", JSON.stringify(items));
    };
    return (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Layout, {
      children: (0, _$$_REQUIRE(_dependencyMap[8]).jsxs)(_reactNative.View, {
        style: {
          height: "100%"
        },
        children: [(0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Button, {
          style: {
            marginLeft: 10,
            marginRight: 10
          },
          onPress: function onPress() {
            setModalVisible(true);
          },
          accessoryLeft: ShoppingIcon,
          children: "\u53D6\u308A\u6271\u3044\u5E97\u8217\u4E00\u89A7"
        }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
          style: {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10
          },
          category: "h6",
          children: "\u6700\u8FD1\u518D\u5165\u8377\u60C5\u5831"
        }), (0, _$$_REQUIRE(_dependencyMap[8]).jsxs)(_$$_REQUIRE(_dependencyMap[9]).Layout, {
          style: {
            flexDirection: 'row',
            marginLeft: 10
          },
          children: [(0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_reactNativeSelectDropdown.default, {
            defaultButtonText: "\u6642\u9593\u9078\u629E",
            data: TimeQuries,
            onSelect: function onSelect(selectedItem, index) {
              setLogTimeMode(index);
              handleChangeLogMode(index, logStockMode);
            },
            buttonStyle: selectstyles.dropdown2BtnStyle,
            buttonTextStyle: selectstyles.dropdown2BtnTxtStyle,
            dropdownIconPosition: 'right',
            dropdownStyle: selectstyles.dropdown2DropdownStyle,
            rowStyle: selectstyles.dropdown2RowStyle,
            rowTextStyle: selectstyles.dropdown2RowTxtStyle,
            selectedRowStyle: selectstyles.dropdown2SelectedRowStyle
          }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_reactNativeSelectDropdown.default, {
            defaultButtonText: "\u5728\u5EAB\u72B6\u6CC1",
            data: StockQuries,
            onSelect: function onSelect(selectedItem, index) {
              setLogStockMode(index);
              handleChangeLogMode(logTimeMode, index);
            },
            buttonStyle: selectstyles.dropdown2BtnStyle,
            buttonTextStyle: selectstyles.dropdown2BtnTxtStyle,
            dropdownIconPosition: 'right',
            dropdownStyle: selectstyles.dropdown2DropdownStyle,
            rowStyle: selectstyles.dropdown2RowStyle,
            rowTextStyle: selectstyles.dropdown2RowTxtStyle,
            selectedRowStyle: selectstyles.dropdown2SelectedRowStyle
          }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Button, {
            appearance: "ghost",
            status: "primary",
            accessoryLeft: SyncIcon,
            onPress: handleUpdateLogs,
            style: {
              justifyContent: 'flex-end',
              marginLeft: 'auto'
            }
          })]
        }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_reactNative.View, {
          children: (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_reactNative.ScrollView, {
            children: logFilteredList.map(function (log) {
              return (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(LogCard, {
                data: log
              }, log.date);
            })
          })
        }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_reactNative.Modal, {
          animationType: "slide",
          transparent: true,
          visible: modalVisible,
          children: (0, _$$_REQUIRE(_dependencyMap[8]).jsxs)(_reactNative.View, {
            style: styles.modalView,
            children: [(0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Button, {
              style: {
                justifyContent: 'flex-end',
                marginLeft: 'auto',
                marginTop: 0
              },
              size: "large",
              appearance: "ghost",
              status: "danger",
              onPress: function onPress() {
                return setModalVisible(false);
              },
              accessoryLeft: CloseIcon
            }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Text, {
              category: "h6",
              children: "\u30B9\u30C8\u30A2\u3092\u9078\u629E"
            }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_reactNativeSelectMultiple.default, {
              style: {
                width: "100%",
                height: "80%"
              },
              items: _$$_REQUIRE(_dependencyMap[11]).STORELIST,
              selectedItems: selectItems,
              renderLabel: renderLabel,
              onSelectionsChange: function onSelectionsChange(items) {
                setSelectItems(items);
                saveSelectedStores(items);
              }
            }), (0, _$$_REQUIRE(_dependencyMap[8]).jsxs)(_reactNative.View, {
              style: {
                flexDirection: 'row',
                justifyContent: 'center'
              },
              children: [(0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Button, {
                style: styles.footerControl,
                size: "small",
                status: "success",
                onPress: function onPress() {
                  setSelectItems(_$$_REQUIRE(_dependencyMap[11]).STORELIST);
                  saveSelectedStores(_$$_REQUIRE(_dependencyMap[11]).STORELIST);
                },
                children: "\u3059\u3079\u3066\u9078\u629E"
              }), (0, _$$_REQUIRE(_dependencyMap[8]).jsx)(_$$_REQUIRE(_dependencyMap[9]).Button, {
                style: styles.footerControl,
                size: "small",
                status: "danger",
                onPress: function onPress() {
                  setSelectItems([]);
                  saveSelectedStores([]);
                },
                children: "\u9078\u629E\u89E3\u9664"
              })]
            })]
          })
        })]
      })
    });
  };
  var styles = _reactNative.StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    card: {
      flex: 1,
      margin: 5
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    footerControl: {
      marginTop: 20,
      width: 100,
      marginLeft: 10
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
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    }
  });
  var selectstyles = _reactNative.StyleSheet.create({
    dropdown2BtnStyle: {
      height: 40,
      width: '35%',
      margin: 5,
      backgroundColor: '#2323FF77',
      borderRadius: 8,
      fontSize: 14
    },
    dropdown2BtnTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14
    },
    dropdown2DropdownStyle: {
      backgroundColor: '#EEE',
      borderRadius: 10,
      color: "black",
      fontSize: 14
    },
    dropdown2RowStyle: {
      backgroundColor: '#EEE',
      borderBottomColor: '#C5C5C5',
      color: "black"
    },
    dropdown2RowTxtStyle: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14
    },
    dropdown2SelectedRowStyle: {
      backgroundColor: 'rgba(255,255,255,0.2)'
    },
    dropdown2searchInputStyleStyle: {
      backgroundColor: '#444',
      borderBottomWidth: 1,
      borderBottomColor: '#FFF',
      fontSize: 14
    }
  });
  var _default = MonitoringPage;
  exports.default = _default;
