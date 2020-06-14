<style src="./index.scss" lang="scss"></style>

<template>
    <div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li>
                <router-link :to="{ name: 'ArticleAdd' }"
                    >Add Article</router-link
                >
            </li>
            <li><router-link :to="{ name: 'TagList' }">Tag</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>
