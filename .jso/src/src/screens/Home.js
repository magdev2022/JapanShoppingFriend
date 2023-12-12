  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[3]);
  var _asyncStorage = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[4]));
  var Home = function Home() {
    var _React$useState = _react.default.useState(true),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      init = _React$useState2[0],
      setinit = _React$useState2[1];
    var _React$useState3 = _react.default.useState(""),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      name = _React$useState4[0],
      setname = _React$useState4[1];
    _react.default.useEffect(function () {
      if (init) {
        _asyncStorage.default.getItem("auth").then(function (encrypted) {
          if (encrypted != null) {
            var decrypted = (0, _$$_REQUIRE(_dependencyMap[5]).DecodeString)(encrypted);
            var userdata = JSON.parse(decrypted);
            setname(userdata.email);
          }
          setinit(false);
        }).catch(function (err) {
          setinit(false);
        });
      }
    });
    return (0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_reactNative.View, {
      children: (0, _$$_REQUIRE(_dependencyMap[6]).jsxs)(_reactNative.View, {
        style: {
          alignItems: 'center',
          marginTop: 50
        },
        children: [(0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Text, {
          category: "h3",
          style: {
            color: '#6666FFAA'
          },
          children: "\u3053\u3093\u306B\u3061\u306F"
        }), (0, _$$_REQUIRE(_dependencyMap[6]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Text, {
          category: "h2",
          style: {
            color: '#2323FFBB'
          },
          children: name
        })]
      })
    });
  };
  var _default = Home;
  exports.default = _default;
