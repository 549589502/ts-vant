cordova.define("com.ares.portal.AppInfo", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function AppInfo(){

    }
    /**
     * 获取app信息
     * @param successCallback
     * @param errorCallback
     */
    AppInfo.prototype.getAppInfo = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "AppInfo", "getAppInfo", []);
    };
    /**
    * 获取版本
    */
    AppInfo.prototype.getVersion = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "AppInfo", "getVersion", []);
    };
    /**
    *   获取build版本
    */
    AppInfo.prototype.getBuild = function (successCallback, errorCallback,url,args) {
        exec(successCallback,errorCallback, "AppInfo", "getBuild", [])
    }
    module.exports = new AppInfo();



});
