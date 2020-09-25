cordova.define("com.ares.portal.FileStorage", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function FileStorage(){

    }

    FileStorage.prototype.fileExistsAtPath = function (successCallback, errorCallback,arg) {
        exec(successCallback, errorCallback, "FileStorage", "fileExistsAtPath", [arg]);
    };
    FileStorage.prototype.createFileAtPath = function (successCallback, errorCallback,arg) {
       exec(successCallback, errorCallback, "FileStorage", "createFileAtPath", [arg]);
    };
    FileStorage.prototype.deleteFileAtPath = function (successCallback, errorCallback,arg) {
        exec(successCallback, errorCallback, "FileStorage", "deleteFileAtPath", [arg]);
    };
    FileStorage.prototype.insertDataAtFile = function (successCallback, errorCallback,arg) {
        exec(successCallback, errorCallback, "FileStorage", "insertDataAtFile", [arg]);
    };
    FileStorage.prototype.deleteDataAtFile = function (successCallback, errorCallback,arg) {
        exec(successCallback, errorCallback, "FileStorage", "deleteDataAtFile", [arg]);
    };
    FileStorage.prototype.updateDataAtFile = function (successCallback, errorCallback,arg) {
        exec(successCallback, errorCallback, "FileStorage", "updateDataAtFile", [arg]);
    };
    FileStorage.prototype.selectDataAtFile = function (successCallback, errorCallback,arg) {
        exec(successCallback, errorCallback, "FileStorage", "selectDataAtFile", [arg]);
    };

    module.exports = new FileStorage();



});
