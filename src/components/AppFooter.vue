<template>
    <footer class="layout__footer">
        <div class="is-left">
            <button class="add" @click="onClickIncrement">+</button>
            <button class="subtract" v-on:click="onClickDecrement">-</button>
            <span>Loading... / {{ title_inc || title }} </span>
            <span v-if="isEven">even</span>
            <span v-if="counter % 2 !== 0">odd</span>
            <span class="name">Name: {{ name.firstname }} {{ name.lastname }}, {{ name.age }}</span>
        </div>
        <div class="is-right">
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
import { computed, defineComponent, reactive, ref } from 'vue'

class Name {
    public readonly firstname: string
    public readonly lastname: string
    public age: number

    constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

export const AppFooter = defineComponent({
    name: 'AppFooter',
    props: {
        title: {
            type: String,
            required: true,
            default: process.env.VUE_APP_TITLE
        }
    },

    setup(props) {
        const increment = 2

        const counter = ref(0)
        const name = reactive(new Name('Mike', 'Mitterer', counter.value))

        const isEven = computed(() => {
            return counter.value % 2 === 0
        })

        const title_inc = computed(() => makeTitle(props.title, counter.value))

        const published = computed((): string => {
            return process.env.VUE_APP_PUBLISHED || '<process.env.VUE_APP_PUBLISHED = undefined>'
        })

        const version = computed((): string => {
            return process.env.VUE_APP_VERSION || '<process.env.VUE_APP_VERSION = undefined>'
        })

        const devmode = computed((): boolean => {
            const devMode =
                process.env.VUE_APP_DEV_MODE || '<process.env.VUE_APP_DEV_MODE = undefined>'

            return devMode === 'true'
        })

        const onClickIncrement = (): void => {
            counter.value += increment
            name.age = counter.value
        }
        const onClickDecrement = (): void => {
            counter.value -= increment
            name.age = counter.value
        }
        return {
            counter,
            isEven,
            title_inc,
            published,
            version,
            devmode,
            onClickIncrement,
            onClickDecrement,
            name
        }
    }
})

const makeTitle = (title: string, counter: number): string => {
    return `${title} + ${counter} `
}

export default AppFooter

// import { CounterStore } from '@/store/interfaces/CounterStore'
// import { RootState } from '@/store/interfaces/RootState'
// import { Component, Prop, Vue } from 'vue-property-decorator'
//
// @Component
// export default class AppFooter extends Vue {
//     @Prop({ default: process.env.VUE_APP_TITLE })
//     private title!: string
//
//     // Component methods can be declared as instance methods
//     public onClickIncrement(): void {
//         this.counterStore.increment(1)
//         // this.anotherTitle = `${this.title} + ${counter.count}`;
//     }
//
//     public onClickDecrement(): void {
//         this.counterStore.decrement(1)
//         // this.anotherTitle = `${this.title} + ${counter.count}`;
//     }
//
//     public get title_inc(): string {
//         return `${this.title} + ${this.counterStore.count}`
//     }
//
//     public get published(): string {
//         return process.env.VUE_APP_PUBLISHED || '<process.env.VUE_APP_PUBLISHED = undefined>'
//     }
//
//     public get version(): string {
//         return process.env.VUE_APP_VERSION || '<process.env.VUE_APP_VERSION = undefined>'
//     }
//
//     public get devmode(): boolean {
//         const devMode = process.env.VUE_APP_DEV_MODE || '<process.env.VUE_APP_DEV_MODE = undefined>'
//
//         return devMode === 'true'
//     }
//
//     public get isEven(): boolean {
//         return this.counterStore.count % 2 === 0
//     }
//
//     public get counter(): number {
//         return this.counterStore.count
//     }
//
//     // - Stores --------------------------------------------------------------------------------
//
//     private get counterStore(): CounterStore {
//         return (this.$store.state as RootState).counterStore()
//     }
// }
</script>

<style scoped lang="scss">
.name {
    padding-left: 1em;
}
</style>
