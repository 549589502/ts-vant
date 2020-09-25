import CryptoJS from 'crypto-js'
// AES-128-CBC偏移量
const key = "zsbonc343452324";

export default {
  encryptByDES(message) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
      mode : CryptoJS.mode.ECB,
      padding : CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },
}