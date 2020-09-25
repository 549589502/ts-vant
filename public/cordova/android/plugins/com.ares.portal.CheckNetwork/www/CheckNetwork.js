cordova.define("com.ares.portal.CheckNetwork", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     */
    function CheckNetwork(){

    }
    /**
     * RemoveCache
     * @param successCallback
     * @param errorCallback
     * @param
     * @param
     */
    CheckNetwork.prototype.pingGateway = function (successCallback, errorCallback, ipAddress) {
        exec(successCallback, errorCallback, "CheckNetwork", "pingGateway", [ipAddress]);
    };

    module.exports = new CheckNetwork();



});
