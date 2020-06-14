const path = require('path');
const rootDir = path.resolve(__dirname);

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(rootDir, 'src'),
            },
        },
    },
};
