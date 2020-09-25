cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
     "file": "plugins/com.ares.portal.Camera/www/Camera.js",
            "id": "com.ares.portal.Camera",
            "pluginId": "com.ares.portal.abc",
            "clobbers": [
                "Camera"
            ]
    },
      {
      "file": "plugins/com.ares.portal.Cache/www/Cache.js",
      "id": "com.ares.portal.Cache",
      "pluginId": "com.ares.portal.bcd",
      "clobbers": [
                   "Cache"
                   ]
      },
      {
      "file": "plugins/com.ares.portal.Gis/www/Gis.js",
      "id": "com.ares.portal.Gis",
      "pluginId": "com.ares.portal.cde",
      "clobbers": [
                   "Gis"
                   ]
      },
      {
      "file": "plugins/com.ares.portal.Request/www/Request.js",
      "id": "com.ares.portal.Request",
      "pluginId": "com.ares.portal.def",
      "clobbers": [
                   "Request"
                   ]
      },
      {
      "file": "plugins/com.ares.portal.Storage/www/Storage.js",
      "id": "com.ares.portal.Storage",
      "pluginId": "com.ares.portal.efg",
      "clobbers": [
                   "Storage"
                   ]
      },
      {
      "file": "plugins/com.ares.portal.CallSystem/www/CallSystem.js",
      "id": "com.ares.portal.CallSystem",
      "pluginId": "com.ares.portal.efg",
      "clobbers": [
                   "CallSystem"
                   ]
      },
      {
        "file": "plugins/com.ares.portal.WeChat/www/WeChat.js",
        "id": "com.ares.portal.WeChat",
        "pluginId": "com.ares.portal.fgh",
        "clobbers": [
                     "WeChat"
                     ]
        },
        {
        "file": "plugins/com.ares.portal.Capture/www/Capture.js",
        "id": "com.ares.portal.Capture",
        "pluginId": "com.ares.portal.ghi",
        "clobbers": [
                     "Capture"
                     ]
        },
        {
        "file": "plugins/com.ares.portal.LocalNotification/www/LocalNotification.js",
        "id": "com.ares.portal.LocalNotification",
        "pluginId": "com.ares.portal.hij",
        "clobbers": [
                     "LocalNotification"
                     ]
        },
        {
        "file": "plugins/com.ares.portal.QuitApp/www/QuitApp.js",
        "id": "com.ares.portal.QuitApp",
        "pluginId": "com.ares.portal.ijk",
        "clobbers": [
                     "QuitApp"
                     ]
        },
        {
        "file": "plugins/com.ares.portal.FileTransfer/www/FileTransfer.js",
        "id": "com.ares.portal.FileTransfer",
        "pluginId": "com.ares.portal.jkl",
        "clobbers": [
                     "FileTransfer"
                     ]
        },
        {
            "id": "com.ares.portal.FileTransferError",
            "file": "plugins/com.ares.portal.FileTransfer/www/FileTransferError.js",
            "pluginId": "com.ares.portal.klm",
            "clobbers": [
              "window.FileTransferError"
            ]
          },
        {
            "id": "com.ares.portal.file.DirectoryEntry",
            "file": "plugins/com.ares.portal.file/www/DirectoryEntry.js",
            "pluginId": "com.ares.portal.lmn",
            "clobbers": [
              "window.DirectoryEntry"
            ]
          },
          {
            "id": "com.ares.portal.file.DirectoryReader",
            "file": "plugins/com.ares.portal.file/www/DirectoryReader.js",
            "pluginId": "com.ares.portal.mno",
            "clobbers": [
              "window.DirectoryReader"
            ]
          },
          {
            "id": "com.ares.portal.file.Entry",
            "file": "plugins/com.ares.portal.file/www/Entry.js",
            "pluginId": "com.ares.portal.nop",
            "clobbers": [
              "window.Entry"
            ]
          },
          {
            "id": "com.ares.portal.file.File",
            "file": "plugins/com.ares.portal.file/www/File.js",
            "pluginId": "com.ares.portal.opq",
            "clobbers": [
              "window.File"
            ]
          },
          {
            "id": "com.ares.portal.file.FileEntry",
            "file": "plugins/com.ares.portal.file/www/FileEntry.js",
            "pluginId": "com.ares.portal.pqr",
            "clobbers": [
              "window.FileEntry"
            ]
          },
          {
            "id": "com.ares.portal.file.FileError",
            "file": "plugins/com.ares.portal.file/www/FileError.js",
            "pluginId": "com.ares.portal.qrs",
            "clobbers": [
              "window.FileError"
            ]
          },
          {
            "id": "com.ares.portal.file.FileReader",
            "file": "plugins/com.ares.portal.file/www/FileReader.js",
            "pluginId": "com.ares.portal.rst",
            "clobbers": [
              "window.FileReader"
            ]
          },
          {
            "id": "com.ares.portal.file.FileSystem",
            "file": "plugins/com.ares.portal.file/www/FileSystem.js",
            "pluginId": "com.ares.portal.stu",
            "clobbers": [
              "window.FileSystem"
            ]
          },
          {
            "id": "com.ares.portal.file.FileUploadOptions",
            "file": "plugins/com.ares.portal.file/www/FileUploadOptions.js",
            "pluginId": "com.ares.portal.tuv",
            "clobbers": [
              "window.FileUploadOptions"
            ]
          },
          {
            "id": "com.ares.portal.file.FileUploadResult",
            "file": "plugins/com.ares.portal.file/www/FileUploadResult.js",
            "pluginId": "com.ares.portal.uvw",
            "clobbers": [
              "window.FileUploadResult"
            ]
          },
          {
            "id": "com.ares.portal.file.FileWriter",
            "file": "plugins/com.ares.portal.file/www/FileWriter.js",
            "pluginId": "com.ares.portal.vwx",
            "clobbers": [
              "window.FileWriter"
            ]
          },
          {
            "id": "com.ares.portal.file.Flags",
            "file": "plugins/com.ares.portal.file/www/Flags.js",
            "pluginId": "com.ares.portal.wxy",
            "clobbers": [
              "window.Flags"
            ]
          },
          {
            "id": "com.ares.portal.file.LocalFileSystem",
            "file": "plugins/com.ares.portal.file/www/LocalFileSystem.js",
            "pluginId": "com.ares.portal.xyz",
            "clobbers": [
              "window.LocalFileSystem"
            ],
            "merges": [
              "window"
            ]
          },
          {
            "id": "com.ares.portal.file.Metadata",
            "file": "plugins/com.ares.portal.file/www/Metadata.js",
            "pluginId": "com.ares.portal.yza",
            "clobbers": [
              "window.Metadata"
            ]
          },
          {
            "id": "com.ares.portal.file.ProgressEvent",
            "file": "plugins/com.ares.portal.file/www/ProgressEvent.js",
            "pluginId": "com.ares.portal.zab",
            "clobbers": [
              "window.ProgressEvent"
            ]
          },
          {
            "id": "com.ares.portal.file.fileSystems",
            "file": "plugins/com.ares.portal.file/www/fileSystems.js",
            "pluginId": "com.ares.portal.abd",
            "clobbers": [
              "window.fileSystems"
            ]
          },
          {
            "id": "com.ares.portal.file.requestFileSystem",
            "file": "plugins/com.ares.portal.file/www/requestFileSystem.js",
            "pluginId": "com.ares.portal.abe",
            "clobbers": [
              "window.requestFileSystem"
            ]
          },
          {
            "id": "com.ares.portal.file.resolveLocalFileSystemURI",
            "file": "plugins/com.ares.portal.file/www/resolveLocalFileSystemURI.js",
            "pluginId": "com.ares.portal.abf",
            "merges": [
              "window"
            ]
          },
          {
            "id": "com.ares.portal.file.isChrome",
            "file": "plugins/com.ares.portal.file/www/browser/isChrome.js",
            "pluginId": "com.ares.portal.abg",
            "runs": true
          },
          {
            "id": "com.ares.portal.file.androidFileSystem",
            "file": "plugins/com.ares.portal.file/www/android/FileSystem.js",
            "pluginId": "com.ares.portal.abh",
            "merges": [
              "FileSystem"
            ]
          },
          {
            "id": "com.ares.portal.file.fileSystems-roots",
            "file": "plugins/com.ares.portal.file/www/fileSystems-roots.js",
            "pluginId": "com.ares.portal.abi",
            "runs": true
          },
          {
            "id": "com.ares.portal.file.fileSystemPaths",
            "file": "plugins/com.ares.portal.file/www/fileSystemPaths.js",
            "pluginId": "com.ares.portal.abj",
            "merges": [
              "cordova"
            ],
            "runs": true
          },
          {
          "file": "plugins/com.ares.portal.QRcode/www/QRcode.js",
          "id": "com.ares.portal.QRcode",
          "pluginId": "com.ares.portal.abk",
          "clobbers": [
               "QRcode"
               ]
          },
         {
           "file": "plugins/com.ares.portal.AppInfo/www/AppInfo.js",
           "id": "com.ares.portal.AppInfo",
           "pluginId": "com.ares.portal.abl",
           "clobbers": [
                "AppInfo"
                ]
          },
          {
             "file": "plugins/com.ares.portal.SkipUrl/www/SkipUrl.js",
             "id": "com.ares.portal.SkipUrl",
             "pluginId": "com.ares.portal.abm",
             "clobbers": [
                  "SkipUrl"
                  ]
            },
            {
             "file": "plugins/com.ares.portal.SkipMapNav/www/SkipMapNav.js",
             "id": "com.ares.portal.SkipMapNav",
             "pluginId": "com.ares.portal.abn",
             "clobbers": [
                  "SkipMapNav"
                  ]
            },
            {
             "file": "plugins/com.ares.portal.SpeechUtility/www/SpeechUtility.js",
             "id": "com.ares.portal.SpeechUtility",
             "pluginId": "com.ares.portal.abo",
             "clobbers": [
                  "SpeechUtility"
                  ]
            },
            {
             "file": "plugins/com.ares.portal.FileStorage/www/FileStorage.js",
             "id": "com.ares.portal.FileStorage",
             "pluginId": "com.ares.portal.abp",
             "clobbers": [
                  "FileStorage"
                  ]
            },
            {
             "file": "plugins/com.ares.portal.CheckNetwork/www/CheckNetwork.js",
             "id": "com.ares.portal.CheckNetwork",
             "pluginId": "com.ares.portal.abq",
             "clobbers": [
                  "CheckNetwork"
                  ]
            },



];
module.exports.metadata = 
// TOP OF METADATA
{};
// BOTTOM OF METADATA
});
