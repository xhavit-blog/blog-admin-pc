<template>
    <div id="app">
        <Article title="test title" content="test content" />
    </div>
</template>

<script>
import Article from './components/Article';

export default {
    name: 'App',
    components: {
        Article,
    },
};
</script>

<style lang="scss" src="./App.scss"></style>
