import axios from 'axios';
import URI from '@/util/uri';
import config from '@/config';

export default http;

/**
 *
 * @param {Object} optons {url, query, params data, headers}
 * @return {Promise}
 */
function http(optons) {
    const { apiBaseUrl } = config;
    const {
        url = '',
        method = 'GET',
        query = {},
        params,
        data,
        headers,
    } = optons;
    const newUrl = URI(`${apiBaseUrl}${compileUriTemplate(url, params)}`)
        .setQuery(query)
        .href();
    const newOptions = { url: newUrl, method, params: query, data, headers };

    return axios
        .request(newOptions)
        .then(handleRequestSuccess, handleRequestFail);
}

/**
 * 处理请求成功的情况
 * @param {Object} response 参考：https://github.com/axios/axios#response-schema
 */
function handleRequestSuccess(response) {
    const { status, data: res } = response;
    const { code, data, message } = res;

    // 204没有返回体
    if (status === 204) {
        return;
    }

    if (code === 0) {
        return data;
    }

    toast(`${code}: ${message}`);
    throw data;
}

/**
 * 处理请求失败的情况
 * @param {Error} error 参考：https://github.com/axios/axios#handling-errors
 */
function handleRequestFail(error) {
    console.dir(error);
    console.log(error);
    const { response } = error;
    const { status, data: res } = response;
    const { code, data, message } = res;

    if (status === 401) {
        authorize();
    }

    toast(`${status}-${code}: ${message}`);
    throw data;
}

/**
 * 处理路径中的params
 * @param {String} uri
 * @param {Object} params
 */
function compileUriTemplate(uri, params = {}) {
    let newUri = uri;

    for (const [key, value] of Object.entries(params)) {
        newUri = newUri.replace(`:${key}`, value);
    }

    return newUri;
}

/**
 * 开始进入授权流程
 */
function authorize() {}

/**
 * 提示信息
 * @param {String} message
 */
function toast(message) {
    alert(message);
}
