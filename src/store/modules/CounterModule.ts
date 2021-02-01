import { counterStore, CounterStore } from '@/store/interfaces/CounterStore'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '../index'

@Module({ namespaced: true, name: counterStore.NAME, store })
export default class CounterModule extends VuexModule implements CounterStore {
    private _count = 350

    public get count(): number {
        return this._count
    }

    /**
     * Init wird durch den Create-Hook in  App.vue angestoßen
     *
     * action 'init' commits mutation '_init' when done
     */
    @Action({ commit: '_init' })
    // tslint:disable-next-line:no-empty
    public async init(): Promise<void> {}

    // action 'increment' commits mutation '_increment' when done with return value as payload
    @Action({ commit: '_increment' })
    public async increment(delta: number): Promise<number> {
        return delta
    }
    // action 'decrement' commits mutation '_decrement' when done with return value as payload
    @Action({ commit: '_decrement' })
    public async decrement(delta: number): Promise<number> {
        return delta
    }

    // - Keep all the Mutations private - we don't want to call Mutations directly -----------------

    @Mutation
    // tslint:disable-next-line:no-empty
    private _init(payload?: unknown): void {}

    @Mutation
    private _increment(delta: number): void {
        this._count += delta
    }

    @Mutation
    private _decrement(delta: number): void {
        this._count -= delta
    }
}
