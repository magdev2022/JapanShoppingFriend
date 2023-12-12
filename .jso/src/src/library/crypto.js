  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.encodeString = exports.XORCipher = exports.DecodeString = undefined;
  var _cryptoJs = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var encodeString = function encodeString(inputString) {
    try {
      var words = _cryptoJs.default.enc.Utf8.parse(inputString);
      var base64 = _cryptoJs.default.enc.Base64.stringify(words);
      return base64;
    } catch (error) {
      console.error(error);
      return '';
    }
  };
  exports.encodeString = encodeString;
  var DecodeString = function DecodeString(inputString) {
    try {
      var words = _cryptoJs.default.enc.Base64.parse(inputString);
      var textString = _cryptoJs.default.enc.Utf8.stringify(words);
      return textString;
    } catch (error) {
      console.error(error);
      return '';
    }
  };
  exports.DecodeString = DecodeString;
  var XORCipher = function XORCipher(text) {
    var result = "";
    var key = "magdev1991";
    for (var i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
  };
  exports.XORCipher = XORCipher;
