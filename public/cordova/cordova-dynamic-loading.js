/**
 *  Place this file in html header ! It will check User agent and load cordova.js dynamicly from native file system if needed.
 */
;(function (ua, global, document) {

  if(!ua || !global || !document){
    throw new Error("Cannot detect userAgent , global or document!");
  }

  var awvHelper = {};
  global.AWVHelper = global.AWVHelper || awvHelper;

  awvHelper.bootstrapCall = bootstrapCall;

  var pathPrefix = findCordovaPath();
  if (pathPrefix === null) {
    console.log('Could not find cordova-dynamic-loading.js script tag. Cordova loading may fail.');
    pathPrefix = '';
  }

  var iOSCordovaPath = pathPrefix + "ios/cordova.js",
    androidCordovaPath = pathPrefix + "android/cordova.js",
    localCordovaPath = "cordova.js";

  //var isHttps = ('https:' === document.location.protocol);
  //var iOSCordovaPath = isHttps ? (pathPrefix + "ios/cordova.js") : "cdvfile://localhost/documents/cordova/cordova.js",
  //  androidCordovaPath = isHttps ? (pathPrefix + "android/cordova.js") : "cdvfile://localhost/files/cordova/cordova.js",
  //  localCordovaPath = "cordova.js";


  var awvUAMatch = ua.match(/\[(AWV.*?)\]/);
  /* 如果没有AWV 直接返回local js, 因为要加上debug 模式， 去掉这个*/
  if(!awvUAMatch){
    console.log("Do not have awv user agent!");
    return;
  }

  /* 初始化 */
  var awvUAStr = awvUAMatch[1],
    awvUAPrefix = "AWV",
    atomicDeviceUaPrefix = "AD";


  awvHelper.ua = {};
  awvHelper.awvVersion = function () {
    return awvHelper.ua[awvUAPrefix];
  };

  awvHelper.isWebView = function() {
    return !!awvHelper.ua[atomicDeviceUaPrefix]
  };


  awvHelper.isAtomicAndroid = function () {
    return (!!awvHelper.ua[awvUAPrefix] && awvHelper.ua[atomicDeviceUaPrefix] === "Android");
  };

  awvHelper.isAtomicIOS = function () {
    return (!!awvHelper.ua[awvUAPrefix] && awvHelper.ua[atomicDeviceUaPrefix] === "iOS");
  };


  /*customize userAgent like [AWV/v1.0;AD/Android] and [AWV/v1.0;AD/iOS] is at last index of userAgent array */
  try{
    /*提取出自定义user agent，convert to Array*/
    var awvUAArray = awvUAStr.split(";");

    /* init userAgent map*/
    if(Array.isArray(awvUAArray)){
      for(var i = 0; i < awvUAArray.length; ++i){
        var tempArr = awvUAArray[i].split("/");
        awvHelper.ua[tempArr[0]] = tempArr[1];
      }
    }

    /* inject cordova js into header depends on platform*/

    if(awvHelper.isAtomicAndroid()){
      //remove local script tag with cordova.js if any
      removeJS(localCordovaPath);
      insertJsToHead(androidCordovaPath, function () {
        console.log("cordova load on android success");
      },cordovaLoadErrorCB);
    }else if(awvHelper.isAtomicIOS()){
      removeJS(localCordovaPath);
      insertJsToHead(iOSCordovaPath, function () {
        console.log("cordova load on ios success");
      },cordovaLoadErrorCB);
    }
  }


  catch(e){
    throw new Error("awvHelper initialize error!");
  }


  function insertJsToHead(path, onload, onerror){
    try{
      var jsEle = document.createElement('script'),
        headerDom = document.getElementsByTagName('head')[0];

      // onload fires even when script fails loads with an error.
      jsEle.onload = onload;
      // onerror fires for malformed URLs.
      jsEle.onerror = onerror;
      jsEle.type = "text/javascript";
      jsEle.src = path;
      headerDom.appendChild(jsEle);
    } catch(e){
      throw new Error("insertJsToHead error!");
    }
  }

  function cordovaLoadErrorCB(){
    console.log("cordova load error, cannot use native feature");
  }


  function removeJS(filename){
    var tags = document.getElementsByTagName('script');
    for (var i = tags.length; i >= 0; i--){ //search backwards within nodelist for matching elements to remove
      if (tags[i] && tags[i].getAttribute('src') != null && tags[i].getAttribute('src') === filename)
        tags[i].parentNode.removeChild(tags[i]); //remove element by calling parentNode.removeChild()
    }
  }

  function findCordovaPath() {
    var path = null;
    var scripts = document.getElementsByTagName('script');
    var term = '/cordova-dynamic-loading.js';
    for (var n = scripts.length-1; n>-1; n--) {
      var src = scripts[n].src.replace(/\?.*$/, ''); // Strip any query param (CB-6007).
      if (src.indexOf(term) == (src.length - term.length)) {
        path = src.substring(0, src.length - term.length) + '/';
        break;
      }
    }
    return path;
  }

  function bootstrapCall(cb, context, args){
    if(AWVHelper && AWVHelper.isWebView && AWVHelper.isWebView()){
      document.addEventListener("deviceready", function () {
        cb.apply(context, args);
      });
    }else{
      cb.apply(context, args);
    }
  }


})(window.navigator.userAgent, window, window.document);
