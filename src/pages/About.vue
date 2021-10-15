<template>
    <div class="about">
        <h1>This is an about page - Count: {{ counter }} /</h1>
    </div>
</template>
<script lang="ts">
import { CounterStore } from '@/store/interfaces/CounterStore'
import { RootState } from '@/store/interfaces/RootState'
import { Component, Vue } from 'vue-property-decorator'

@Component({ components: {} })
export default class About extends Vue {
    public get counter(): number {
        return this.counterStore.count
    }

    public get published(): string {
        return process.env.VUE_APP_PUBLISHED || '<process.env.VUE_APP_PUBLISHED = undefined>'
    }

    // - Stores --------------------------------------------------------------------------------

    private get counterStore(): CounterStore {
        return (this.$store.state as RootState).counterStore()
    }
}
</script>
<style lang="scss"></style>
