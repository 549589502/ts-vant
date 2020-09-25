cordova.define("com.ares.portal.Request", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function Request(){

    }
    /**
     * network request
     * @param successCallback
     * @param errorCallback
     * @param url
     * @param args
     */
    Request.prototype.postRequest = function (successCallback, errorCallback,url,args,encrytype) {
        exec(successCallback, errorCallback, "Request", "postRequest", [url,args,encrytype]);
    };
    Request.prototype.getNoEncrypt = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "Request", "getNoEncrypt", [url,args]);
    };
    Request.prototype.postFile = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "Request", "postFile", [url,args]);
    };
    module.exports = new Request();



});
