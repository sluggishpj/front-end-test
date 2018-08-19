module.exports = {
    module: {
        rules: [{
            // 统计覆盖率除掉polyfill代码
            test: /\.js$/,
            enforce: 'post',
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true },
            },
            exclude: /node_modules/,
        }, {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env'],
                plugins: ['istanbul'] // 解决babel编译导致代码覆盖率不全的问题，比如使用import和require时的覆盖率不一致
              }
            },
            exclude: /node_modules/,
        }]
    },
    devtool: '#inline-source-map'
}