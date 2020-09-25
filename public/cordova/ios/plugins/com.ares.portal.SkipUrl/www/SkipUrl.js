cordova.define("com.ares.portal.SkipUrl", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function SkipUrl(){

    }
    /**
     * RemoveCache
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    SkipUrl.prototype.skipUrl = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "SkipUrl", "skipUrl", []);
    };
    SkipUrl.prototype.downloadUrl = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "SkipUrl", "downloadUrl", []);
    };

    module.exports = new SkipUrl();



});
