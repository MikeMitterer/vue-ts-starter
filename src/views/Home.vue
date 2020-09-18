<template>
    <div class="home">
        <img alt="Vue logo" class="logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <h3>From Store!</h3>
        <div>Counter: {{ cnt }}</div>
    </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
// import { CounterStore } from '@/store/interfaces/CounterStore'
// import { RootState } from '@/store/interfaces/RootState' // @ is an alias to /src
import { defineComponent } from 'vue'
// import { useStore } from 'vuex'

export default defineComponent({
    name: 'Home',
    components: { HelloWorld },
    props: {
        msg: String
    },
    setup(props) {
        return {
            cnt: () => {}
        }
    }

    // - Stores --------------------------------------------------------------------------------
    // counterStore(): CounterStore {
    //     return (useStore().state as RootState).counterStore()
    // }
})

// @Component({
//     components: {
//         HelloWorld
//     }
// })
// export default class Home extends Vue {
//     public get cnt(): number {
//         return this.counterStore.count
//     }
//
//     // - Stores --------------------------------------------------------------------------------
//
//     private get counterStore(): CounterStore {
//         return (useStore().state as RootState).counterStore()
//     }
// }
</script>
<style></style>
