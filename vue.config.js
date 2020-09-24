const webpack = require("webpack");
module.exports = {
    runtimeCompiler: true,
    lintOnSave: false,
    devServer: {
        port: 8090,
        open: true,
        proxy: {
            '/tms': {
                target: 'http://14.215.246.10:13000/tms',
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