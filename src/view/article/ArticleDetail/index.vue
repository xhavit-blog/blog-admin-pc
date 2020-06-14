<style src="./index.scss" lang="scss"></style>

<template>
    <article>
        <header>
            <h1>
                {{ title }} -
                <router-link
                    replace
                    :to="{
                        name: 'ArticleUpdate',
                        params: { id },
                    }"
                    >update</router-link
                >
            </h1>
        </header>
        <section>{{ content }}</section>
    </article>
</template>

<script>
import { queryArticleDetailApi } from '@/api/article';

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
    },
};
</script>
