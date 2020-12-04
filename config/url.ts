const configs = {
    // 测试环境
    test: {
        API_SERVER: 'your-api-path',
    },

    // 开发环境
    development: {
        API_SERVER: 'https://preview.pro.ant.design',
        // API_SERVER: 'http://saleapi.grasppos.cn',
        // API_SERVER: 'http://192.168.1.205:11009',
    },

    // 生产环境
    production: {
        // API_SERVER: 'http://saleapi.xzgpos.cn',
        // API_SERVER: 'http://saleapi.grasppos.cn',
        // API_SERVER: 'http://192.168.1.205:12009',
        // API_SERVER: 'http://192.168.1.205:12009',
        API_SERVER: 'http://192.168.1.56:12009',
        // API_SERVER: 'http://saleapi.gjpyls.cn',
    },
};

const API_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
export default configs[API_ENV];
