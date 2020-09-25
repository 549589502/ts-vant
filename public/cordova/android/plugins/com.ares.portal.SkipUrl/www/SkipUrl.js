cordova.define("com.ares.portal.SkipUrl", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function SkipUrl(){

    }

    SkipUrl.prototype.skipUrl = function (successCallback, errorCallback, url) {
        exec(successCallback, errorCallback, "SkipUrl", "skipUrl", [url]);
    };

    SkipUrl.prototype.downloadUrl = function (successCallback, errorCallback, url, type) {
        exec(successCallback, errorCallback, "SkipUrl", "downloadUrl", [url, type]);
    };

    module.exports = new SkipUrl();



});
