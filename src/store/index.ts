import { RootState } from '@/store/interfaces/RootState'
// import CounterModule from '@/store/modules/CounterModule'
import { LoggerFactory } from '@mmit/logging'
import { ActionContext, ActionTree, createStore, MutationTree } from 'vuex'

const logger = LoggerFactory.getLogger('vue-ts-starter.store')

const state: RootState = {
    loaded: false

    // counterStore: (): CounterStore => {
    //     if (isNotRegistered(counterStore.NAME, store)) {
    //         store.registerModule(counterStore.NAME, CounterModule)
    //     }
    //     return getModule(CounterModule, store)
    // }
}

/**
 * Mutations are synchronous
 *
 *      context.commit('readyState', loadState);
 */
const mutations: MutationTree<RootState> = {
    readyState(status: RootState, payload: boolean): void {
        status.loaded = payload
        logger.info('Root-Store initialized!')
    }
}

/**
 * Actions can be asynchronous.
 *
 * Make it a practice to never commit your Mutations directly.
 * Always use Actions to commit your mutations
 *
 *      this.$store.dispatch('readyState');
 */
const actions: ActionTree<RootState, RootState> = {
    // prettier-ignore
    async readyState( context: ActionContext<RootState, RootState>, payload: boolean = true ): Promise<void> {
        logger.info('Initializing Root store...');

        // Nur zum testen...
        // await context.state.counterStore().init()

        context.commit('readyState', payload)
    }
}

const store = createStore({
    state,
    mutations,
    actions
    // modules: {
    //     gameModule,
    // },
})

export default store
