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
        <button @click="updateArticle()">确认修改</button>
    </div>
</template>

<script>
import { queryArticleDetailApi, updateArticleApi } from '@/api/article';

export default {
    data() {
        const { id } = this.$route.params;

        return {
            id,
            title: '',
            content: '',
        };
    },
    async created() {
        this.queryArticleDetail();
    },
    methods: {
        async queryArticleDetail() {
            const { title, content } = await queryArticleDetailApi({
                params: { id: this.id },
            });

            this.title = title;
            this.content = content;
        },
        async updateArticle() {
            const { id, title, content } = this;

            await updateArticleApi({
                params: { id },
                data: { title, content },
            });

            this.$router.replace({ name: 'ArticleDetail', params: { id } });
        },
    },
};
</script>
