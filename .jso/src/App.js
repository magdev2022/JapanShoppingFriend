  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[2]));
  _$$_REQUIRE(_dependencyMap[3]);
  var _react = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[4]));
  var eva = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[5]));
  var _BlogPage = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[6]));
  var _SettingPage = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[7]));
  var _Home = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[8]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[9]);
  var _reactNative2 = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[10]));
  var _RakutenPage = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[11]));
  var _MonitoringPage = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[12]));
  var _asyncStorage = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeQrcodeScanner = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[14]));
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  var Stack = (0, _$$_REQUIRE(_dependencyMap[15]).createNativeStackNavigator)();
  var Drawer = (0, _$$_REQUIRE(_dependencyMap[16]).createDrawerNavigator)();
  var AuthContext = _react.default.createContext({});
  var SplashScreen = function SplashScreen() {
    return (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_reactNative.ImageBackground, {
      source: _$$_REQUIRE(_dependencyMap[18]),
      style: {
        width: '100%',
        height: '100%'
      }
    });
  };
  var ScanScreen = function ScanScreen(_ref) {
    var navigation = _ref.navigation;
    var _React$useContext = _react.default.useContext(AuthContext),
      signInWithQRCode = _React$useContext.signInWithQRCode;
    var qrCodeSuccess = function qrCodeSuccess(e) {
      var qrdata = e.data;
      signInWithQRCode(qrdata);
    };
    return (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_reactNativeQrcodeScanner.default, {
      onRead: qrCodeSuccess,
      containerStyle: {
        backgroundColor: '#222'
      },
      topContent: (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Text, {
        style: {
          color: "#FFF",
          fontSize: 14,
          fontWeight: 'bold',
          width: 200,
          textAlign: 'center'
        },
        children: "AIOBOTJP\u30A2\u30D7\u30EA\u304B\u3089QRCODE\u3092\u30B9\u30AD\u30E3\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
      }),
      bottomContent: (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Button, {
        onPress: function onPress() {
          return navigation.navigate('ログイン');
        },
        children: "\u53D6\u6D88"
      })
    });
  };
  var Login = function Login(_ref2) {
    var navigation = _ref2.navigation;
    var _React$useState = _react.default.useState(""),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      email = _React$useState2[0],
      setemail = _React$useState2[1];
    var _React$useState3 = _react.default.useState(""),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      pass = _React$useState4[0],
      setpass = _React$useState4[1];
    var _React$useContext2 = _react.default.useContext(AuthContext),
      signIn = _React$useContext2.signIn,
      signTrial = _React$useContext2.signTrial;
    return (0, _$$_REQUIRE(_dependencyMap[17]).jsxs)(_reactNative.View, {
      style: {
        flex: 1,
        backgroundColor: "#090209"
      },
      children: [(0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Text, {
        category: "h1",
        style: {
          color: "#e800ff",
          margin: 10
        },
        children: "\u8CB7\u3044\u7269\u53CB\u9054"
      }), (0, _$$_REQUIRE(_dependencyMap[17]).jsxs)(_reactNative.View, {
        style: {
          justifyContent: 'center',
          flex: 1,
          margin: 10
        },
        children: [(0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Text, {
          style: {
            color: '#fff',
            fontSize: 25
          },
          children: "\u30ED\u30B0\u30A4\u30F3"
        }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Text, {
          style: {
            color: '#fff',
            fontSize: 12,
            marginTop: 5
          },
          children: "\u30E1\u30FC\u30EB\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        }), (0, _$$_REQUIRE(_dependencyMap[17]).jsxs)(_reactNative.View, {
          style: {
            margin: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 15
          },
          children: [(0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_reactNative.View, {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 5
            },
            children: (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_reactNative.TextInput, {
              placeholder: "E\u30E1\u30FC\u30EB",
              secureTextEntry: false,
              dataDetectorTypes: 'address',
              cursorColor: "black",
              style: {
                height: 40,
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 15,
                fontSize: 16
              },
              value: email,
              onChangeText: setemail
            })
          }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_reactNative.View, {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 5
            },
            children: (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_reactNative.TextInput, {
              placeholder: "\u30D1\u30B9\u30EF\u30FC\u30C9",
              secureTextEntry: false,
              dataDetectorTypes: 'address',
              cursorColor: "black",
              style: {
                height: 40,
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 15,
                fontSize: 16
              },
              value: pass,
              onChangeText: setpass
            })
          }), (0, _$$_REQUIRE(_dependencyMap[17]).jsxs)(_reactNative.View, {
            style: {
              marginTop: 20,
              gap: 10
            },
            children: [(0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Button, {
              status: "primary",
              onPress: function onPress() {
                return signIn({
                  email: email,
                  pass: pass
                });
              },
              children: "\u30ED\u30B0\u30A4\u30F3"
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Button, {
              status: "info",
              appearance: "outline",
              onPress: function onPress() {
                return _reactNative.Linking.openURL("https://aiobotjp.com/users/sign_in");
              },
              children: "\u4F1A\u54E1\u4EE5\u5916\u306E\u65B9\u30FB\u767B\u9332"
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Button, {
              status: "success",
              onPress: function onPress() {
                return navigation.navigate('QRCODE');
              },
              children: "QR\u30B3\u30FC\u30C9\u30ED\u30B0\u30A4\u30F3"
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Button, {
              status: "warning",
              onPress: function onPress() {
                return signTrial({});
              },
              children: "3\u65E5\u9593\u7121\u6599\u4F53\u9A13"
            })]
          })]
        })]
      })]
    });
  };
  var App = function App() {
    var _React$useState5 = _react.default.useState(true),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      init = _React$useState6[0],
      setinit = _React$useState6[1];
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      isConnected = _React$useState8[0],
      setisConnected = _React$useState8[1];
    _reactNative2.default.onBackgroundEvent(function () {
      var _ref4 = (0, _asyncToGenerator2.default)(function* (_ref3) {
        var _detail$pressAction;
        var type = _ref3.type,
          detail = _ref3.detail;
        if (type === _reactNative2.EventType.ACTION_PRESS && (_detail$pressAction = detail.pressAction) != null && _detail$pressAction.id.includes('openlink')) {
          var _detail$notification;
          if (((_detail$notification = detail.notification) == null ? undefined : _detail$notification.body) != undefined) {
            var _detail$notification2;
            yield _reactNative.Linking.openURL((_detail$notification2 = detail.notification) == null ? undefined : _detail$notification2.body);
          }
        }
      });
      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());
    _reactNative2.default.onForegroundEvent(function () {
      var _ref6 = (0, _asyncToGenerator2.default)(function* (_ref5) {
        var _detail$pressAction2;
        var type = _ref5.type,
          detail = _ref5.detail;
        if (type === _reactNative2.EventType.ACTION_PRESS && (_detail$pressAction2 = detail.pressAction) != null && _detail$pressAction2.id.includes('openlink')) {
          var _detail$notification3;
          if (((_detail$notification3 = detail.notification) == null ? undefined : _detail$notification3.body) != undefined) {
            var _detail$notification4;
            yield _reactNative.Linking.openURL((_detail$notification4 = detail.notification) == null ? undefined : _detail$notification4.body);
          }
        }
      });
      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }());
    var _React$useReducer = _react.default.useReducer(function (prevState, action) {
        switch (action.type) {
          case 'RESTORE_TOKEN':
            return Object.assign({}, prevState, {
              userToken: action.token,
              isLoading: false
            });
          case 'SIGN_IN':
            return Object.assign({}, prevState, {
              isSignout: false,
              userToken: action.token
            });
          case 'SIGN_OUT':
            return Object.assign({}, prevState, {
              isSignout: true,
              userToken: null
            });
        }
      }, {
        isLoading: true,
        isSignout: false,
        userToken: null
      }),
      _React$useReducer2 = (0, _slicedToArray2.default)(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];
    function onMonitorNotification(_x3) {
      return _onMonitorNotification.apply(this, arguments);
    }
    function _onMonitorNotification() {
      _onMonitorNotification = (0, _asyncToGenerator2.default)(function* (msg) {
        var userToken;
        try {
          var encrypted = yield _asyncStorage.default.getItem("auth");
          if (encrypted != null) {
            var decrypted = (0, _$$_REQUIRE(_dependencyMap[20]).DecodeString)(encrypted);
            var userdata = JSON.parse(decrypted);
            var expired = new Date(userdata.expire);
            var curtime = new Date();
            var difftime = expired - curtime;
            if (difftime < 0) {
              userToken = "expired";
            } else {
              userToken = "authenticated";
            }
          }
        } catch (e) {}
        if (userToken != 'authenticated') {
          return;
        }
        var logFilePath = _$$_REQUIRE(_dependencyMap[21]).Dirs.DocumentDir + "/" + "log.txt";
        var exist = yield _$$_REQUIRE(_dependencyMap[21]).FileSystem.exists(logFilePath);
        var storeTxt = yield _asyncStorage.default.getItem("monitorStores");
        if (storeTxt == null) {
          return;
        }
        var monitorStores = JSON.parse(storeTxt);
        if (monitorStores.length == 0) {
          return;
        }
        var channelId = yield _reactNative2.default.createChannel({
          id: 'default',
          name: 'Default Channel',
          importance: _reactNative2.AndroidImportance.HIGH
        });
        var msgObj = JSON.parse(msg);
        console.log(msgObj.store);
        var store = msgObj.store;
        if (store.includes(' ')) {
          store = store.split(' ')[0];
        }
        var url = msgObj.url;
        if (store == "everyone") {} else {
          var chkStoreExist = false;
          for (var index = 0; index < monitorStores.length; index++) {
            var element = monitorStores[index];
            if (element.value.toLowerCase().includes(store.toLocaleLowerCase())) {
              chkStoreExist = true;
              break;
            }
          }
          if (chkStoreExist) {
            if (msg.stock == 1) {
              yield _reactNative2.default.displayNotification({
                title: store,
                subtitle: msgObj.name,
                body: msgObj.url,
                android: {
                  channelId: channelId,
                  importance: _reactNative2.AndroidImportance.HIGH,
                  actions: [{
                    title: '製品ページへ',
                    pressAction: {
                      id: 'openlink'
                    }
                  }]
                }
              });
              console.log("send notification");
            }
            var logdata = JSON.stringify({
              store: store,
              url: url,
              name: msgObj.name,
              stock: msgObj.stock,
              date: new Date()
            });
            if (exist) {
              yield _$$_REQUIRE(_dependencyMap[21]).FileSystem.appendFile(logFilePath, logdata + "\n", 'utf8');
            } else {
              yield _$$_REQUIRE(_dependencyMap[21]).FileSystem.writeFile(logFilePath, logdata + "\n", 'utf8');
            }
          }
        }
      });
      return _onMonitorNotification.apply(this, arguments);
    }
    var authContext = _react.default.useMemo(function () {
      return {
        signIn: function () {
          var _signIn = (0, _asyncToGenerator2.default)(function* (data) {
            var details = {
              'email': data.email,
              'password': data.pass,
              'ip': '10.10.10.10',
              'mac': 'mobile',
              'app': 'Premire',
              'timestamp': '20230101'
            };
            var formBody = [];
            for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
            }
            return yield fetch('https://aiobotjp.com/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: formBody.join("&")
            }).then(function (res) {
              return res.json();
            }).then(function (json) {
              var login_res = false;
              if (json.success == true) {
                if (json.role == "admin" || json.role == "staff") {
                  login_res = true;
                } else if (json.role == "lifetime") {
                  if (json.lifetime_status == true) {
                    login_res = true;
                  }
                } else {
                  if (JSON.stringify(json.subscriptions).includes('activated')) {
                    login_res = true;
                  }
                }
              }
              if (login_res == true) {
                var expiredate = new Date(Date.now() + 604800000);
                var userdata = {
                  'email': data.email,
                  'pass': data.pass,
                  'expire': expiredate.toString()
                };
                var user_text = JSON.stringify(userdata);
                var encrypted = (0, _$$_REQUIRE(_dependencyMap[20]).encodeString)(user_text);
                _asyncStorage.default.setItem("auth", encrypted).then(function (res) {
                  console.log(res);
                }).catch(function (err) {
                  console.log(err);
                });
                console.log("save login session");
                dispatch({
                  type: 'SIGN_IN',
                  token: 'authenticated'
                });
              } else {
                _reactNative.Alert.alert('エラー', 'ログインに失敗しました!', [{
                  text: 'OK',
                  onPress: function onPress() {
                    return console.log('OK Pressed');
                  }
                }]);
              }
            }).catch(function (err) {
              console.log("Login Failed");
            });
          });
          function signIn(_x4) {
            return _signIn.apply(this, arguments);
          }
          return signIn;
        }(),
        signOut: function signOut() {
          return dispatch({
            type: 'SIGN_OUT'
          });
        },
        signInWithQRCode: function () {
          var _signInWithQRCode = (0, _asyncToGenerator2.default)(function* (qrcode) {
            console.log(qrcode.split(';')[0]);
            console.log(qrcode.split(';')[1]);
            var username = qrcode.split(';')[2];
            var log_date = new Date(qrcode.split(';')[1]);
            var cur_date = new Date();
            var diff = cur_date - log_date;
            var diff_h = Math.floor(diff / 60000);
            if (diff_h > 3) {
              _reactNative.Alert.alert('エラー', 'QRコードの有効期限が切れています。!', [{
                text: 'OK',
                onPress: function onPress() {
                  return console.log('OK Pressed');
                }
              }]);
            } else {
              if (qrcode.includes('authentication')) {
                var expiredate = new Date(Date.now() + 259200000);
                var userdata = {
                  'email': username,
                  'pass': "",
                  'expire': expiredate.toString()
                };
                var user_text = JSON.stringify(userdata);
                var encrypted = (0, _$$_REQUIRE(_dependencyMap[20]).encodeString)(user_text);
                _asyncStorage.default.setItem("auth", encrypted).then(function (res) {
                  console.log(res);
                }).catch(function (err) {
                  console.log(err);
                });
                console.log("save login session");
                dispatch({
                  type: 'SIGN_IN',
                  token: 'authenticated'
                });
              }
            }
          });
          function signInWithQRCode(_x5) {
            return _signInWithQRCode.apply(this, arguments);
          }
          return signInWithQRCode;
        }(),
        signTrial: function () {
          var _signTrial = (0, _asyncToGenerator2.default)(function* () {
            var deviceID = yield (0, _$$_REQUIRE(_dependencyMap[22]).getUniqueId)();
            var chkResp = yield fetch('http://43.207.48.120/api/post/trial/' + deviceID);
            if (chkResp.status == 200) {
              var jsondata = yield chkResp.json();
              var starttime = jsondata.starttime;
              var curtime = Date.now();
              var difftime = (curtime - starttime) / 1000 / 60 / 60 / 24;
              console.log(difftime);
              if (difftime > 3) {
                _reactNative.Alert.alert('エラー', '無料お試し期間は終了しました!', [{
                  text: 'OK',
                  onPress: function onPress() {
                    return console.log('OK Pressed');
                  }
                }]);
              } else {
                var expiredate = new Date(Date.now() + 259200000);
                var userdata = {
                  'email': 'freetrial',
                  'pass': '',
                  'expire': expiredate.toString()
                };
                var user_text = JSON.stringify(userdata);
                var encrypted = (0, _$$_REQUIRE(_dependencyMap[20]).encodeString)(user_text);
                _asyncStorage.default.setItem("auth", encrypted).then(function (res) {
                  console.log(res);
                }).catch(function (err) {
                  console.log(err);
                });
                dispatch({
                  type: 'SIGN_IN',
                  token: 'authenticated'
                });
              }
            } else {
              var data = {
                device: deviceID,
                starttime: Date.now()
              };
              var setResp = yield fetch('http://43.207.48.120/api/post/trial/add', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
              if (setResp.status == 201) {
                var _expiredate = new Date(Date.now() + 259200000);
                var _userdata = {
                  'email': 'Free Trial',
                  'pass': '',
                  'expire': _expiredate.toString()
                };
                var _user_text = JSON.stringify(_userdata);
                var _encrypted = (0, _$$_REQUIRE(_dependencyMap[20]).encodeString)(_user_text);
                _asyncStorage.default.setItem("auth", _encrypted).then(function (res) {
                  console.log(res);
                }).catch(function (err) {
                  console.log(err);
                });
                dispatch({
                  type: 'SIGN_IN',
                  token: 'authenticated'
                });
              } else {
                _reactNative.Alert.alert('エラー', 'エラーが発生しました!', [{
                  text: 'OK',
                  onPress: function onPress() {
                    return console.log('OK Pressed');
                  }
                }]);
              }
            }
          });
          function signTrial() {
            return _signTrial.apply(this, arguments);
          }
          return signTrial;
        }()
      };
    }, []);
    _react.default.useEffect(function () {
      var bootstrapAsync = function () {
        var _ref7 = (0, _asyncToGenerator2.default)(function* () {
          var isemulator = yield (0, _$$_REQUIRE(_dependencyMap[22]).isEmulator)();
          if (isemulator) {
            _reactNative.BackHandler.exitApp();
          }
          var settings = yield _reactNative2.default.getNotificationSettings();
          if (settings.authorizationStatus == _reactNative2.AuthorizationStatus.AUTHORIZED) {
            console.log('Notification permissions has been authorized');
          } else if (settings.authorizationStatus == _reactNative2.AuthorizationStatus.DENIED) {
            console.log('Notification permissions has been denied');
          }
          var userToken;
          try {
            var encrypted = yield _asyncStorage.default.getItem("auth");
            if (encrypted != null) {
              var decrypted = (0, _$$_REQUIRE(_dependencyMap[20]).DecodeString)(encrypted);
              var userdata = JSON.parse(decrypted);
              var expired = new Date(userdata.expire);
              var curtime = new Date();
              var difftime = expired - curtime;
              if (difftime < 0) {
                userToken = "expired";
              } else {
                userToken = "authenticated";
              }
            }
          } catch (e) {}
          dispatch({
            type: 'RESTORE_TOKEN',
            token: userToken
          });
        });
        return function bootstrapAsync() {
          return _ref7.apply(this, arguments);
        };
      }();
      bootstrapAsync();
    }, []);
    _react.default.useEffect(function () {
      if (init) {
        if (!isConnected) {
          var socket = (0, _$$_REQUIRE(_dependencyMap[23]).io)("ws://13.230.88.204/");
          socket.on("connect", function () {
            console.log("connected", socket.id);
            setisConnected(true);
          });
          socket.on("disconnect", function () {
            console.log("disconnected");
            setisConnected(false);
          });
          socket.on("postinfo", function (msg) {
            onMonitorNotification(msg);
          });
        }
      }
      setinit(false);
    });
    var CustomDrawerContent = function CustomDrawerContent(props) {
      return (0, _$$_REQUIRE(_dependencyMap[17]).jsxs)(_$$_REQUIRE(_dependencyMap[16]).DrawerContentScrollView, Object.assign({}, props, {
        children: [(0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[16]).DrawerItem, {
          label: function label(_ref8) {
            var focused = _ref8.focused,
              color = _ref8.color;
            return (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).Text, {
              style: {
                color: color
              },
              category: "h4",
              children: "\u8CB7\u3044\u7269\u53CB\u9054"
            });
          },
          onPress: function onPress() {}
        }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[16]).DrawerItemList, Object.assign({}, props))]
      }));
    };
    return (0, _$$_REQUIRE(_dependencyMap[17]).jsxs)(AuthContext.Provider, {
      value: authContext,
      children: [(0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).IconRegistry, {
        icons: [_$$_REQUIRE(_dependencyMap[24]).EvaIconsPack, _$$_REQUIRE(_dependencyMap[25]).AssetIconsPack]
      }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[19]).ApplicationProvider, Object.assign({}, eva, {
        theme: eva.light,
        children: (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(_$$_REQUIRE(_dependencyMap[26]).NavigationContainer, {
          children: state.isLoading ? (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(SplashScreen, {}) : state.userToken == "authenticated" ? (0, _$$_REQUIRE(_dependencyMap[17]).jsxs)(Drawer.Navigator, {
            initialRouteName: "\u8A18\u4E8B\u4E00\u89A7",
            drawerContent: function drawerContent(props) {
              return (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(CustomDrawerContent, Object.assign({}, props));
            },
            children: [(0, _$$_REQUIRE(_dependencyMap[17]).jsx)(Drawer.Screen, {
              name: "\u8A18\u4E8B\u4E00\u89A7",
              component: _BlogPage.default
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(Drawer.Screen, {
              name: "\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9",
              component: _MonitoringPage.default
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(Drawer.Screen, {
              name: "\u697D\u5929\u5E02\u5834",
              component: _RakutenPage.default
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(Drawer.Screen, {
              name: "\u8A2D\u5B9A",
              component: _SettingPage.default
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(Drawer.Screen, {
              name: "\u30DE\u30A4\u30DA\u30FC\u30B8",
              component: _Home.default
            })]
          }) : (0, _$$_REQUIRE(_dependencyMap[17]).jsxs)(Stack.Navigator, {
            screenOptions: {
              headerShown: false
            },
            children: [(0, _$$_REQUIRE(_dependencyMap[17]).jsx)(Stack.Screen, {
              name: "\u30ED\u30B0\u30A4\u30F3",
              component: Login
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(Stack.Screen, {
              name: "\u30DE\u30A4\u30DA\u30FC\u30B8",
              component: _Home.default
            }), (0, _$$_REQUIRE(_dependencyMap[17]).jsx)(Stack.Screen, {
              name: "QRCODE",
              component: ScanScreen
            })]
          })
        })
      }))]
    });
  };
  var _default = App;
  exports.default = _default;
