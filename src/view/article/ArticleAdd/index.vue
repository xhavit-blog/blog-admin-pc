<style src="./index.scss" lang="scss"></style>

<template>
    <div class="xp-jlafsf">
        <div class="xp-jlafsf-label">
            <label for="">标题：</label>
        </div>
        <div class="xp-jlafsf-control">
            <input type="text" v-model="title" />
        </div>
        <div class="xp-jlafsf-label">
            <label for="">内容：</label>
        </div>
        <div class="xp-jlafsf-control">
            <textarea v-model="content"></textarea>
        </div>
        <button @click="addArticle()">提交</button>
    </div>
</template>

<script>
import { addArticleApi } from '@/api/article';

export default {
    data() {
        return {
            title: '',
            content: '',
        };
    },
    async created() {},
    methods: {
        async addArticle() {
            const { title, content } = this;

            const { id } = await addArticleApi({
                data: { title, content },
            });

            this.$router.replace({ name: 'ArticleDetail', params: { id } });
        },
    },
};
</script>
