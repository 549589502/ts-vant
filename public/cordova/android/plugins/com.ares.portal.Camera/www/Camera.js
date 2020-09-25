cordova.define("com.ares.portal.Camera", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function Camera(){

    }
    /**
     * upload img
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    Camera.prototype.uploadImg = function (successCallback, errorCallback, args) {
        exec(successCallback, errorCallback, "Camera", "uploadImg", args);
    };

    Camera.prototype.uploadAlbum = function (successCallback, errorCallback, args) {
        exec(successCallback, errorCallback, "Camera", "uploadAlbum", args);
    };

    module.exports = new Camera();



});
