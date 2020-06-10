import VueRouter from 'vue-router';
import ArticleList from '../view/article/ArticleList';
import ArticleDetail from '../view/article/ArticleDetail';
import ArticleAdd from '../view/article/ArticleAdd';
import ArticleEdit from '../view/article/ArticleEdit';
import TagList from '../view/tag/TagList';

const routes = getRoutes();
const router = new VueRouter({ routes });

/**
 * 获取路由配置
 */
function getRoutes() {
    return [
        {
            path: '/',
            component: ArticleList,
        },
        {
            path: '/article/add',
            component: ArticleAdd,
        },
        {
            path: '/article/:id/edit',
            component: ArticleEdit,
        },
        {
            path: '/article/:id',
            component: ArticleDetail,
        },
        {
            path: '/tag',
            component: TagList,
        },
    ];
}

export default router;
