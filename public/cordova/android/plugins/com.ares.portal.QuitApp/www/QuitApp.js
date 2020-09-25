cordova.define("com.ares.portal.QuitApp", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function QuitApp(){

    }
    /**
     * Storage
     * @param successCallback
     * @param errorCallback
     */
    QuitApp.prototype.quit = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "QuitApp", "quit", []);
    };


    module.exports = new QuitApp();



});
