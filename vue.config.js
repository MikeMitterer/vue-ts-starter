const moment = require('moment');
const package = require('./package');

const devMode = process.env.NODE_ENV !== 'production';
const date = moment().format('YYYY.MM.DD HH:mm');

// vue inspect zeigt die webpack.js an
module.exports = {
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap(args => {
                args[0].templateParameters = {
                    version: package.version,
                    devmode: devMode,
                    published: date,
                };
                return args
            })
    }
};
