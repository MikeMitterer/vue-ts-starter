<template>
    <div class="layout__header">
        <nav class="navbar navbar-light toolbar">
            <router-link to="/">
                <span class="iconify" height="20" data-icon="mdi-home">uu</span>Home
            </router-link>
            <span class="separator">|</span>
            <router-link to="/charts">
                <span class="iconify" height="20" data-icon="mdi-chart-bar"></span> Charts
            </router-link>
            <span class="separator">|</span>
            <router-link to="/about">
                <span class="iconify" height="20" data-icon="mdi-information-outline"></span> About
            </router-link>
        </nav>
        <div class="demo_images">
            <img
                class="cat"
                style="position: absolute"
                v-bind:style="{ left: counter + 'px' }"
                src="../assets/images/static/cat.jpg"
            />
            <img id="frontImg" :src="img" />
        </div>
    </div>
</template>

<script lang="ts">
import { CounterStore } from '@/store/interfaces/CounterStore'
import { RootState } from '@/store/interfaces/RootState'
import { Component, Prop, Vue } from 'vue-property-decorator'
import lambi from '../assets/images/lambi.png'

@Component
export default class AppHeader extends Vue {
    @Prop() private msg!: string

    get img(): string {
        return lambi
    }

    public get counter(): number {
        return Math.min(500, Math.max(110, this.counterStore.count))
    }

    // - Stores --------------------------------------------------------------------------------

    private get counterStore(): CounterStore {
        return (this.$store.state as RootState).counterStore()
    }
}
</script>

<style scoped lang="scss"></style>
