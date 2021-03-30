import { CounterStore } from '@/store/interfaces/CounterStore'
import { RootState } from '@/store/interfaces/RootState'
import CounterModule from '@/store/modules/CounterModule'
import { isNotRegistered } from '@/store/utils'
import { LoggerFactory } from '@mmit/logging'
import Vue from 'vue'

const logger = LoggerFactory.getLogger('vue-ts-starter.store')

const store: RootState & { stores: { counterStore?: CounterStore } } = {
    loaded: false,
    stores: { },

    counterStore: () => {
        if (typeof store.stores?.counterStore === 'undefined') {
            store.stores.counterStore = new CounterModule()
        }
        return store.stores.counterStore
    },

    async init(): Promise<void> {
        logger.info('Initializing Root store...');

        await store.counterStore().init()

        store.loaded = true

        logger.info('Root store initialized!');
    }
}

export default store as Readonly<RootState>
