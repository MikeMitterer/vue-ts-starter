<template>
    <div class="modal__header">
        <nav class="navbar navbar-light">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <div class="demo_images">
            <img class="cat" src="../assets/images/static/cat.jpg">
            <img id="frontImg" :src="img"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import lambi from '../assets/images/lambi.png';

    @Component
    export default class AppHeader extends Vue {
        @Prop() private msg!: string;

        get img(): string {
            return lambi;
        }
    }
</script>

<style scoped lang="scss"></style>
