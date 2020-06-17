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
        <section><Markdonw :markdown="content" /></section>
    </article>
</template>

<script>
import Markdonw from '@/component-base/Markdown';
import { queryArticleDetailApi } from '@/api/article';

export default {
    components: { Markdonw },
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
