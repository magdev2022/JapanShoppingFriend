  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AssetIconsPack = undefined;
  var _objectDestructuringEmpty2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[3]);
  var IconProvider = function IconProvider(source) {
    return {
      toReactElement: function toReactElement(_ref) {
        var props = Object.assign({}, ((0, _objectDestructuringEmpty2.default)(_ref), _ref));
        return (0, _$$_REQUIRE(_dependencyMap[4]).jsx)(_reactNative.Image, Object.assign({}, props, {
          source: source
        }));
      }
    };
  };
  var AssetIconsPack = {
    name: 'assets',
    icons: {
      'toys': IconProvider(_$$_REQUIRE(_dependencyMap[5])),
      'console': IconProvider(_$$_REQUIRE(_dependencyMap[6])),
      'pokemon': IconProvider(_$$_REQUIRE(_dependencyMap[7])),
      'snkrs': IconProvider(_$$_REQUIRE(_dependencyMap[8])),
      'clothes': IconProvider(_$$_REQUIRE(_dependencyMap[9]))
    }
  };
  exports.AssetIconsPack = AssetIconsPack;
