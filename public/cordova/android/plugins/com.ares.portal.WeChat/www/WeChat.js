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
    WeChat.prototype.wxLogin = function (successCallback, errorCallback, appId, appSecret) {
        exec(successCallback, errorCallback, "WeChat", "wxLogin", [appId, appSecret]);
    };
    WeChat.prototype.wxShare = function (successCallback, errorCallback, appId, appSecret, url, type, title, description) {
        exec(successCallback, errorCallback, "WeChat", "wxShare", [appId, appSecret, url, type, title, description]);
    };

    WeChat.prototype.wxIsInstalled = function (successCallback, errorCallback, appId, appSecret) {
        exec(successCallback, errorCallback, "WeChat", "wxIsInstalled", [appId, appSecret]);
    };

    module.exports = new WeChat();



});
