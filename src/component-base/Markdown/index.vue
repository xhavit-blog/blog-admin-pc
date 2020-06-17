<style src="./index.scss" lang="scss"></style>

<template>
    <div>
        <div v-html="html"></div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/core';
import http from 'highlight.js/lib/languages/http';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import handlebars from 'highlight.js/lib/languages/handlebars';
import scss from 'highlight.js/lib/languages/scss';
import less from 'highlight.js/lib/languages/less';
import css from 'highlight.js/lib/languages/css';
import shell from 'highlight.js/lib/languages/shell';
import 'highlight.js/styles/vs.css';

hljs.registerLanguage('http', http);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('handlebars', handlebars);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('less', less);
hljs.registerLanguage('css', css);
hljs.registerLanguage('shell', shell);

const md = new MarkdownIt({
    html: true,
    highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            console.log(lang);
            console.log(hljs.getLanguage(lang));
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {
                // no nothing
            }
        }

        return ''; // use external default escaping
    },
});

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
