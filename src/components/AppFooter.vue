<template>
    <footer class="layout__footer">
        <div>
            <button class="add" @click="onClickIncrement">+</button>
            <button class="subtract" v-on:click="onClickDecrement">-</button>
            <span>Loading... / {{ title_inc || title }} </span>
            <span v-if="isEven">even</span>
            <span v-if="counter % 2 !== 0">odd</span>
        </div>
        <div>
            <div class="version_block">
                <span class="version">Version {{ version }}</span>
                <span class="separator">/</span>
                <span class="published">{{ published }}</span>
                <span class="separator">/</span>
            </div>
            <span v-if="devmode" class="devmode">DevMode</span>
            <span v-if="!devmode" class="production">Production</span>
        </div>
    </footer>
</template>

<script lang="ts">
import { CounterStore } from '@/store/interfaces/CounterStore'
import { RootState } from '@/store/interfaces/RootState'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AppFooter extends Vue {
    @Prop({ default: process.env.VUE_APP_TITLE })
    private title!: string

    // Component methods can be declared as instance methods
    public onClickIncrement(): void {
        this.counterStore.increment(1)
        // this.anotherTitle = `${this.title} + ${counter.count}`;
    }

    public onClickDecrement(): void {
        this.counterStore.decrement(1)
        // this.anotherTitle = `${this.title} + ${counter.count}`;
    }

    public get title_inc(): string {
        return `${this.title} + ${this.counterStore.count}`
    }

    public get published(): string {
        return process.env.VUE_APP_PUBLISHED || '<process.env.VUE_APP_PUBLISHED = undefined>'
    }

    public get version(): string {
        return process.env.VUE_APP_VERSION || '<process.env.VUE_APP_VERSION = undefined>'
    }

    public get devmode(): boolean {
        const devMode = process.env.VUE_APP_DEV_MODE || '<process.env.VUE_APP_DEV_MODE = undefined>'

        return devMode === 'true'
    }

    public get isEven(): boolean {
        return this.counterStore.count % 2 === 0
    }

    public get counter(): number {
        return this.counterStore.count
    }

    // - Stores --------------------------------------------------------------------------------

    private get counterStore(): CounterStore {
        return (this.$store.state as RootState).counterStore()
    }
}
</script>

<style scoped lang="scss"></style>
