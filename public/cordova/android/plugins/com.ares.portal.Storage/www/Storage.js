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
    Storage.prototype.saveKeyValue = function (successCallback, errorCallback,object, scope) {
        exec(successCallback, errorCallback, "Storage", "saveKeyValue", [object, scope]);
    };
    Storage.prototype.getByKey = function (successCallback, errorCallback,key,scope) {
        exec(successCallback, errorCallback, "Storage", "getByKey", [key, scope]);
    };
    Storage.prototype.deleteByKey = function (successCallback, errorCallback,key,scope) {
        exec(successCallback, errorCallback, "Storage", "deleteByKey", [key, scope]);
    };

    module.exports = new Storage();



});
