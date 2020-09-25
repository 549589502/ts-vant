cordova.define("com.ares.portal.Capture", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function Capture(){

    }
    /**
     * RemoveCache
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    Capture.prototype.captureImage = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "Capture", "captureImage", []);
    };
    Capture.prototype.captureAudio = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "Capture", "captureAudio", []);
    };
    Capture.prototype.captureVideo = function (successCallback, errorCallback,url,args) {
        exec(successCallback, errorCallback, "Capture", "captureVideo", []);
    };
    module.exports = new Capture();



});
