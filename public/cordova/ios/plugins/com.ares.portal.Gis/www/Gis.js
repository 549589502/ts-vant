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
    Gis.prototype.getGis = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "Gis", "getGis", []);
    };

    module.exports = new Gis();



});
