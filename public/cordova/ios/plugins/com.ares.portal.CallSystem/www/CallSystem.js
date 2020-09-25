cordova.define("com.ares.portal.CallSystem", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function CallSystem(){

    }
    /**
     * RemoveCache
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    // 电话
    CallSystem.prototype.callSystemPhone = function (successCallback, errorCallback,number) {
        exec(successCallback, errorCallback, "CallSystem", "callSystemPhone", [number]);
    };

     // 短信
    CallSystem.prototype.callSystemMessage = function (successCallback, errorCallback,number) {
        exec(successCallback, errorCallback, "CallSystem", "callSystemMessage", [number]);
    };
     // Safari
    CallSystem.prototype.callSystemSafari = function (successCallback, errorCallback,url) {
        exec(successCallback, errorCallback, "CallSystem", "callSystemSafari", [url]);
    };
     // WIFI
    CallSystem.prototype.callSystemWIFI = function (successCallback, errorCallback,number) {
        exec(successCallback, errorCallback, "CallSystem", "callSystemWIFI", [number]);
    };
     // 蓝牙
    CallSystem.prototype.callSystemBluetooth = function (successCallback, errorCallback,number) {
        exec(null, null, "CallSystem", "callSystemBluetooth", [number]);
    };
     // 通用
    CallSystem.prototype.callSystemGeneral = function (successCallback, errorCallback,number) {
        exec(successCallback, errorCallback, "CallSystem", "callSystemGeneral", [number]);
    };
     // 关于本机
    CallSystem.prototype.callSystemAbout = function (successCallback, errorCallback,number) {
        exec(successCallback, errorCallback, "CallSystem", "callSystemAbout", [number]);
    };
     // 定位服务
    CallSystem.prototype.callSystemLocation = function (successCallback, errorCallback,number) {
        exec(successCallback, errorCallback, "CallSystem", "callSystemLocation", [number]);
    };
     // 通知
    CallSystem.prototype.callSystemNotification = function (successCallback, errorCallback,number) {
        exec(successCallback, errorCallback, "CallSystem", "callSystemNotification", [number]);
    };

    module.exports = new CallSystem();



});
