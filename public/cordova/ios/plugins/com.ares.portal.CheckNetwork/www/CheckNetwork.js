cordova.define("com.ares.portal.CheckNetwork", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function CheckNetwork(){

    }

    CheckNetwork.prototype.checkNetwork = function (successCallback, errorCallback,arg) {
        exec(successCallback, errorCallback, "CheckNetwork", "checkNetwork", []);
    };
    CheckNetwork.prototype.pingGateway = function (successCallback, errorCallback, arg) {
        exec(successCallback, errorCallback, "CheckNetwork", "pingGateway", [arg]);
    };

    module.exports = new CheckNetwork();



});
