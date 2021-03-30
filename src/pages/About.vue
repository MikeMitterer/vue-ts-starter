<template>
    <div class="about">
        <h1>This is an about page - Count: {{ counter }} /</h1>
        <div class="col1">
            <h2>Store-Test (Array)</h2>
            <ul>
                <li v-for="date in counterStore.state.dates" :key="date.index + date.now">
                    {{ date.index }}, {{ date.now }}
                </li>

            </ul>
        </div>
        <div class="col2">
            <h2>Col2</h2>
        </div>
    </div>
</template>
<script lang="ts">
import { CounterStore } from '@/store/interfaces/CounterStore'
import { RootState } from '@/store/interfaces/RootState'
import { Component, Vue } from 'vue-property-decorator'

import store from '../store'

@Component({ components: {} })
export default class About extends Vue {
    public get counter(): number {
        return this.counterStore.state.count
    }

    public get published(): string {
        return process.env.VUE_APP_PUBLISHED || '<process.env.VUE_APP_PUBLISHED = undefined>'
    }

    // - Stores --------------------------------------------------------------------------------

    private get counterStore(): CounterStore {
        return (store).counterStore()
    }
}
</script>
<style lang="scss">
.about {
    // -------------------------------------------------------------------------------------------------
    // Weitere Infos:
    //     https://css-tricks.com/snippets/css/complete-guide-grid/
    //

    display: grid;
    grid-gap: 10px;
    grid-template-columns:  repeat(2, 1fr);;

    > *:first-child {
        grid-column: span 2;
    }
    
    ul {
        list-style: none;

        li {
            padding: 0;
            margin: 0;
        }
    }
}
</style>
