cordova.define("com.ares.portal.Gis", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function Gis(){

    }
    /**
     * GIS
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    Gis.prototype.getGis = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "Gis", "getGis", []);
    };

    Gis.prototype.getGisAndUpload = function (successCallback, errorCallback,time,url,token) {
        exec(successCallback, errorCallback, "Gis", "getGisAndUpload", [time,url,token]);
    };

    Gis.prototype.stopGis = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "Gis", "stopGis", []);
    };

    module.exports = new Gis();



});
