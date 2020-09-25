cordova.define("com.ares.portal.Cache", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function Cache(){

    }
    /**
     * RemoveCache
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    Cache.prototype.removeCache = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "Cache", "removeCache", []);
    };

    module.exports = new Cache();



});
