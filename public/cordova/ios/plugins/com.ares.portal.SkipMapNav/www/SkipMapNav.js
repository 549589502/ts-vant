cordova.define("com.ares.portal.SkipMapNav", function(require, exports, module) { var exec = require('cordova/exec');

    /**
     * @constructor
     * @param slat 起点纬度
     * @param slon 起点经度
     * @param sname 起点位置
     * @param dlat 终点纬度
     * @param dlon 终点经度
     * @param dname 终点位置
     */
    function SkipMapNav(){

    }

    SkipMapNav.prototype.skipBaiduMap = function (successCallback, errorCallback, slat, slon, sname, dlat, dlon, dname) {
        exec(successCallback, errorCallback, "SkipMapNav", "skipBaiduMap", [slat, slon, sname, dlat, dlon, dname]);
    };

    SkipMapNav.prototype.skipAmap = function (successCallback, errorCallback, slat, slon, sname, dlat, dlon, dname) {
        exec(successCallback, errorCallback, "SkipMapNav", "skipAmap", [slat, slon, sname, dlat, dlon, dname]);
    };

    module.exports = new SkipMapNav();



});
