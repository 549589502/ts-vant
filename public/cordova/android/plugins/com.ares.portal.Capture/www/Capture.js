cordova.define("com.ares.portal.Capture", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function Capture(){

    }
    /**
     * Storage
     * @param successCallback
     * @param errorCallback
     * @param key
     * @param value
     * @param scope
     */
    Capture.prototype.captureImage = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "Capture", "captureImage", []);
    };
    Capture.prototype.captureAudio = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "Capture", "captureAudio", []);
    };
    Capture.prototype.captureVideo = function (successCallback, errorCallback, duration) {
        exec(successCallback, errorCallback, "Capture", "captureVideo", [duration]);
    };

    module.exports = new Capture();



});
