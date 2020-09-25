cordova.define("com.ares.portal.QRcode", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function QRcode(){

    }
    /**
     * QRcode
     * @param successCallback
     * @param errorCallback
     */
    QRcode.prototype.qRcode = function (successCallback, errorCallback,object) {
        exec(successCallback, errorCallback, "QRcode", "qRcode", []);
    };
    module.exports = new QRcode();



});
