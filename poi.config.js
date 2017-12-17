var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    webpack(config) {
        config.plugins.push(new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_URL: JSON.stringify(process.env.API_URL),
            },
        }));
        return config; // <-- Important, must return it
    }
}