cordova.define("com.ares.portal.FileStorage", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function FileStorage(){

    }
    /**
     * RemoveCache
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    FileStorage.prototype.fileExistsAtPath = function (successCallback, errorCallback, fileName) {
        exec(successCallback, errorCallback, "FileStorage", "fileExistsAtPath", [fileName]);
    };
    FileStorage.prototype.createFileAtPath = function (successCallback, errorCallback, fileName) {
        exec(successCallback, errorCallback, "FileStorage", "createFileAtPath", [fileName]);
    };
    FileStorage.prototype.deleteFileAtPath = function (successCallback, errorCallback, fileName) {
        exec(successCallback, errorCallback, "FileStorage", "deleteFileAtPath", [fileName]);
    };
    FileStorage.prototype.insertDataAtFile = function (successCallback, errorCallback, fileName, args) {
        exec(successCallback, errorCallback, "FileStorage", "insertDataAtFile", [fileName, args]);
    };
    FileStorage.prototype.deleteDataAtFile = function (successCallback, errorCallback, fileName, key) {
        exec(successCallback, errorCallback, "FileStorage", "deleteDataAtFile", [fileName, key]);
    };
    FileStorage.prototype.selectDataAtFile = function (successCallback, errorCallback, fileName, key) {
        exec(successCallback, errorCallback, "FileStorage", "selectDataAtFile", [fileName, key]);
    };


    module.exports = new FileStorage();



});
