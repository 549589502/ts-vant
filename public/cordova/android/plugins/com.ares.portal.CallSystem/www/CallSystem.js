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

    module.exports = new CallSystem();



});
