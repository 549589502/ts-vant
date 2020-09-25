cordova.define("com.ares.portal.AppInfo", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function AppInfo(){

    }

    AppInfo.prototype.getVersion = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppInfo", "getVersion", []);
    };

    module.exports = new AppInfo();



});
