export const configs = {
    development: {
        apiBaseUrl: 'http://localhost:4444',
        siteBaseUrl: 'http://localhost:8080',
    },
    test: {
        apiBaseUrl: 'https://api.test.xhavit.cn',
        siteBaseUrl: 'https://test.xhavit.cn',
    },
    production: {
        apiBaseUrl: 'https://api.xhavit.cn',
        siteBaseUrl: 'https://xhavit.cn',
    },
};

export default configs[process.env.VUE_APP_ENV] || configs.development;
