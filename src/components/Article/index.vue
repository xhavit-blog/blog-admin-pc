<style src="./index.scss" lang="scss"></style>

<template>
    <article>
        <header>
            <h1>{{ title }}</h1>
        </header>
        <section>{{ content }}</section>
    </article>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        content: { type: String, required: true },
    },
};
</script>
