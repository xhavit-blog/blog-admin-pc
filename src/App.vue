<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './component/Header';

export default {
    name: 'App',
    components: { Header },
};
</script>

<style lang="scss" src="./App.scss"></style>
