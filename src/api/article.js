import http from '@/util/http';

/**
 * 查询文章列表
 */
export async function queryArticleListApi() {
    return await http({
        url: '/article/list',
        method: 'POST',
    });
}

/**
 * 查询文章详情
 */
export async function queryArticleDetailApi({ params }) {
    return await http({
        url: '/article/detail/:id',
        params,
    });
}

/**
 * 添加文章
 */
export async function addArticleApi({ data }) {
    return await http({
        url: '/article/add',
        method: 'POST',
        data,
    });
}

/**
 * 修改文章
 */
export async function updateArticleApi({ params, data }) {
    return await http({
        url: '/article/update/:id',
        method: 'POST',
        params,
        data,
    });
}

/**
 * 删除文章
 */
export async function removeArticleApi({ params }) {
    return await http({
        url: '/article/remove/:id',
        method: 'DELETE',
        params,
    });
}
