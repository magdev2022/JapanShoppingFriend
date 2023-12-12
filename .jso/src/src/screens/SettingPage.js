  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[2]));
  var _react = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[3]));
  var SettingPage = function SettingPage() {
    var _React$useState = _react.default.useState(true),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      init = _React$useState2[0],
      setinit = _React$useState2[1];
    var _React$useState3 = _react.default.useState(0),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      logsize = _React$useState4[0],
      setLogSize = _React$useState4[1];
    _react.default.useEffect(function () {
      if (init) {
        var logFilePath = _$$_REQUIRE(_dependencyMap[4]).Dirs.DocumentDir + "/" + "log.txt";
        _$$_REQUIRE(_dependencyMap[4]).FileSystem.stat(logFilePath).then(function (stat) {
          setLogSize(Math.floor(stat.size / 1000));
        }).catch(function (err) {
          setLogSize(0);
        });
        setinit(false);
      }
    });
    var handleRemoveLog = function () {
      var _ref = (0, _asyncToGenerator2.default)(function* () {
        var logFilePath = _$$_REQUIRE(_dependencyMap[4]).Dirs.DocumentDir + "/" + "log.txt";
        yield _$$_REQUIRE(_dependencyMap[4]).FileSystem.unlink(logFilePath);
        setLogSize(0);
      });
      return function handleRemoveLog() {
        return _ref.apply(this, arguments);
      };
    }();
    return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Layout, {
      children: (0, _$$_REQUIRE(_dependencyMap[5]).jsxs)(_$$_REQUIRE(_dependencyMap[6]).Layout, {
        style: {
          flexDirection: 'row',
          margin: 20
        },
        children: [(0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Text, {
          style: {
            verticalAlign: 'middle'
          },
          children: "Log File Size:"
        }), (0, _$$_REQUIRE(_dependencyMap[5]).jsxs)(_$$_REQUIRE(_dependencyMap[6]).Text, {
          style: {
            marginLeft: 5,
            verticalAlign: 'middle'
          },
          children: [logsize, "KB"]
        }), (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Button, {
          status: "danger",
          style: {
            justifyContent: 'flex-end',
            marginLeft: 'auto'
          },
          onPress: handleRemoveLog,
          size: "small",
          children: "\u6D88\u3059"
        })]
      })
    });
  };
  var _default = SettingPage;
  exports.default = _default;
