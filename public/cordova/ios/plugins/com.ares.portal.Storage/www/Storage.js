cordova.define("com.ares.portal.Storage", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function Storage(){

    }
    /**
     * Storage
     * @param successCallback
     * @param errorCallback
     * @param key
     * @param value
     * @param scope
     */
    Storage.prototype.saveKeyValue = function (successCallback, errorCallback,object) {
        exec(successCallback, errorCallback, "Storage", "saveKeyValue", [object]);
    };
    Storage.prototype.getByKey = function (successCallback, errorCallback,key,value) {
        exec(successCallback, errorCallback, "Storage", "getByKey", [key, value]);
    };
    Storage.prototype.deleteByKey = function (successCallback, errorCallback,key,value) {
        exec(successCallback, errorCallback, "Storage", "deleteByKey", [key, value]);
    };

    module.exports = new Storage();



});
