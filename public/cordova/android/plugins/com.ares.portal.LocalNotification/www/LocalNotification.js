cordova.define("com.ares.portal.LocalNotification", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function LocalNotification(){

    }
    /**
     * Storage
     * @param successCallback
     * @param errorCallback
     * @param key
     * @param value
     * @param scope
     */
    LocalNotification.prototype.notification = function (successCallback, errorCallback, args) {
        exec(successCallback, errorCallback, "LocalNotification", "notification", [args]);
    };

    LocalNotification.prototype.schedule = function (successCallback, errorCallback, args) {
        exec(successCallback, errorCallback, "LocalNotification", "schedule", [args]);
    };


    module.exports = new LocalNotification();



});
