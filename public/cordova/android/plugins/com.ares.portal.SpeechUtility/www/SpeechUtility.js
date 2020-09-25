cordova.define("com.ares.portal.SpeechUtility", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function SpeechUtility(){

    }
    /**
     * RemoveCache
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    SpeechUtility.prototype.speechRecognitionR = function (successCallback, errorCallback,appid) {
        exec(successCallback, errorCallback, "SpeechUtility", "speechRecognitionR", []);
    };
    SpeechUtility.prototype.speechRecognitionWithoutView = function () {
        exec(null, null, "SpeechUtility", "speechRecognitionWithoutView", []);
    };
    SpeechUtility.prototype.stopSpeechRecognition = function (successCallback, errorCallback,appid) {
        exec(successCallback, errorCallback, "SpeechUtility", "stopSpeechRecognition", []);
    };
    SpeechUtility.prototype.cancelSpeechRecognition = function () {
        exec(null, null, "SpeechUtility", "cancelSpeechRecognition", []);
    };

    module.exports = new SpeechUtility();



});
