<style src="./index.scss" lang="scss"></style>

<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <router-link
                    :to="{ name: 'ArticleDetail', params: { id: item.id } }"
                    >{{ item.title }}</router-link
                >
                <span @click="removeArticle(item.id)">删除</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { queryArticleListApi, removeArticleApi } from '@/api/article';

export default {
    data() {
        return { list: [] };
    },

    created() {
        this.queryArticleList();
    },

    methods: {
        async queryArticleList() {
            const { list } = await queryArticleListApi();
            this.list = list;
        },
        async removeArticle(id) {
            await removeArticleApi({ params: { id } });
            await this.queryArticleList();
        },
    },
};
</script>
