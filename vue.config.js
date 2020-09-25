const webpack = require("webpack");
module.exports = {
    runtimeCompiler: true,
    lintOnSave: false,
    devServer: {
        port: 9090,
        open: true,
        proxy: {
            '/xbbackend': {
                target: 'http://192.168.1.182:3004', //
                ws: false,
                changeOrigin: true
            },
        },
    },
    chainWebpack: (config) => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');

        config.plugin('ignore')
            .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));//忽略/moment/locale下的所有


    },

}