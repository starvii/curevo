const dirVars = require('./base/dir-vars.config');

const moduleConfig = require('./inherit/module.config');

/*
 由于ExtractTextPlugin不支持热更新，因此选择在开发环境下直接用style-loader加载样式。
 如有问题，可切换回ExtractTextPlugin，即使不能用热更新，也可实现LiveReload
 */
moduleConfig.rules.push({
    test: /\.css$/,
    exclude: /node_modules|bootstrap/,
    // loader: 'style!css?minimize&-autoprefixer!postcss',
    use: [
        {
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
            },
    ],
});

moduleConfig.rules.push({
    test: /\.css$/,
    include: /bootstrap/,
    use: [
        'style-loader', 'css-loader',
    ],
});

moduleConfig.rules.push({
    test: /\.less$/,
    include: dirVars.srcRootDir,
    use: [
        {
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
        },
        {
            loader: 'less-loader',
        },
    ],
});

exports = module.exports = moduleConfig;