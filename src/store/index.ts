import { counterStore, CounterStore } from '@/store/interfaces/CounterStore'
import { RootState } from '@/store/interfaces/RootState'
import CounterModule from '@/store/modules/CounterModule'
import { isNotRegistered } from '@/store/utils'
import { LoggerFactory } from '@mmit/logging'
import Vue from 'vue'
import Vuex, { ActionContext, ActionTree, MutationTree } from 'vuex'
import { getModule } from 'vuex-module-decorators'

const logger = LoggerFactory.getLogger('vue-ts-starter.store')

Vue.use(Vuex)

const state: RootState = {
    loaded: false,

    counterStore: (): CounterStore => {
        if (isNotRegistered(counterStore.NAME, store)) {
            store.registerModule(counterStore.NAME, CounterModule)
        }
        return getModule(CounterModule, store)
    }
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
        await context.state.counterStore().init()

        context.commit('readyState', payload)
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
    // modules: {
    //     gameModule,
    // },
})

export default store
