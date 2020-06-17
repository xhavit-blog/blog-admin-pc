<style src="./index.scss" lang="scss"></style>

<template>
    <div>
        <div v-html="html"></div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true });

export default {
    props: {
        markdown: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            html: '',
        };
    },
    watch: {
        markdown: {
            immediate: true,
            handler(val) {
                this.html = md.render(val);
            },
        },
    },
};
</script>
