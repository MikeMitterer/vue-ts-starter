<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <h3>From Store!</h3>
        <div>Counter: {{cnt}}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import counter from '../store/modules/CounterModule';

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        public get cnt() {
            return counter.count;
        }

    }
</script>
