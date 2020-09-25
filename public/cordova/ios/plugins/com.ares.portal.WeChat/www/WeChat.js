cordova.define("com.ares.portal.WeChat", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function WeChat(){

    }
    /**
     * Storage
     * @param successCallback
     * @param errorCallback
     * @param key
     * @param value
     * @param scope
     */
    WeChat.prototype.wxLogin = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "WeChat", "wxLogin", [url, args]);
    };
       WeChat.prototype.wxIsInstalled = function (successCallback, errorCallback,url,args) {
       exec(successCallback, errorCallback, "WeChat", "wxIsInstalled", [url, args]);
       };
    WeChat.prototype.wxShare = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "WeChat", "wxShare", []);
    };
    WeChat.prototype.wxPay = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "WeChat", "wxPay", []);
    };

    module.exports = new WeChat();



});
