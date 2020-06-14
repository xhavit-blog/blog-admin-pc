import VueRouter from 'vue-router';
import ArticleList from '../view/article/ArticleList';
import ArticleDetail from '../view/article/ArticleDetail';
import ArticleAdd from '../view/article/ArticleAdd';
import ArticleUpdate from '../view/article/ArticleUpdate';
import TagList from '../view/tag/TagList';

const routes = getRoutes();
const router = new VueRouter({ routes });

/**
 * 获取路由配置
 */
function getRoutes() {
    return [
        {
            name: 'ArticleList',
            path: '/',
            component: ArticleList,
        },
        {
            name: 'ArticleAdd',
            path: '/article/add',
            component: ArticleAdd,
        },
        {
            name: 'ArticleUpdate',
            path: '/article/update/:id',
            component: ArticleUpdate,
        },
        {
            name: 'ArticleDetail',
            path: '/article/:id',
            component: ArticleDetail,
        },
        {
            name: 'TagList',
            path: '/tag',
            component: TagList,
        },
    ];
}

export default router;
