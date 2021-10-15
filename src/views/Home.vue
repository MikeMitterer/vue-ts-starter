<template>
    <div class="home" :class="{ 'is-online': isOnline, 'is-offline': !isOnline }">
        <img alt="Vue logo" class="logo" src="../assets/logo.png" />
        <div>Counter: <strong>{{ cnt }}</strong></div>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App - 4" />
        <h3>From Store!</h3>
    </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { CounterStore } from '@/store/interfaces/CounterStore'
import { RootState } from '@/store/interfaces/RootState' // @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {
    private isOnline = false

    public get cnt(): number {
        return this.counterStore.count
    }

    // - Stores --------------------------------------------------------------------------------

    private get counterStore(): CounterStore {
        return (this.$store.state as RootState).counterStore()
    }

    // - LiveCycle-Hooks -----------------------------------------------------------------------

    public created(): void {
        window.addEventListener('online', () => this.isOnline = true);
        window.addEventListener('offline', () => this.isOnline = false);

        this.isOnline = window.navigator.onLine
    }

}
</script>
<style lang="scss" scoped>
    .home img {
        margin-bottom: 1em;
    }

    .home.is-offline {
        img {
            background-color: red !important;
        }
    }
</style>
