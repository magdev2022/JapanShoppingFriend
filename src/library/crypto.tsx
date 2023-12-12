import CryptoJS from 'crypto-js';

export const encodeString = (inputString: string): string => {
    try {
        var words = CryptoJS.enc.Utf8.parse(inputString); 
        var base64 = CryptoJS.enc.Base64.stringify(words);
        return base64 
    } catch (error) {
        console.error(error);
        return '';
    }
}

export const DecodeString = (inputString: string): string => {
    try {      
        var words = CryptoJS.enc.Base64.parse(inputString);
        var textString = CryptoJS.enc.Utf8.stringify(words);
        return textString
    } catch (error) {
        console.error(error);        
        return '';
    }
}

export const XORCipher = (text:string):string=> {
    var result = "";
    const key = "magdev1991"
    for (var i = 0; i < text.length; i++) {        
      result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}