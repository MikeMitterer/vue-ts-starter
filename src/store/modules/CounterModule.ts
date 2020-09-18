import {
    ActionContext,
    ActionTree,
    CommitOptions,
    createStore,
    DispatchOptions,
    GetterTree,
    MutationTree,
    Store as VuexStore
} from 'vuex'

export const state = {
    counter: 0
}

export type State = typeof state

export enum MutationTypes {
    SET_COUNTER = 'SET_COUNTER'
}

export enum ActionTypes {
    GET_COUNTER = 'GET_COUNTER'
}

export interface Mutations<S = State> {
    [MutationTypes.SET_COUNTER](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_COUNTER](mystate: State, payload: number): void {
        mystate.counter = payload
    }
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.GET_COUNTER]({ commit }: AugmentedActionContext, payload: number): Promise<number>
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.GET_COUNTER]({ commit }): Promise<number> {
        return new Promise<number>((resolve) => {
            setTimeout(() => {
                const data = 256
                commit(MutationTypes.SET_COUNTER, data)
                resolve(data)
            }, 500)
        })
    }
}

export interface Getters {
    doubledCounter(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
    doubledCounter: (mystate: State) => {
        return mystate.counter * 2
    }
}

export const store = createStore({
    state,
    getters,
    mutations,
    actions
})

export type Store = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
}

// @Module({ namespaced: true, name: counterStore.NAME, store })
// export default class CounterModule extends VuexModule implements CounterStore {
//     private _count = 150
//
//     public get count(): number {
//         return this._count
//     }
//
//     /**
//      * Init wird durch den Create-Hook in  App.vue angestoßen
//      *
//      * action 'init' commits mutation '_init' when done
//      */
//     @Action({ commit: '_init' })
//     // tslint:disable-next-line:no-empty
//     public async init(): Promise<void> {}
//
//     // action 'increment' commits mutation '_increment' when done with return value as payload
//     @Action({ commit: '_increment' })
//     public async increment(delta: number): Promise<number> {
//         return delta
//     }
//
//     // action 'decrement' commits mutation '_decrement' when done with return value as payload
//     @Action({ commit: '_decrement' })
//     public async decrement(delta: number): Promise<number> {
//         return delta
//     }
//
//     // - Keep all the Mutations private - we don't want to call Mutations directly -----------------
//
//     @Mutation
//     // tslint:disable-next-line:no-empty
//     private _init(payload?: unknown): void {}
//
//     @Mutation
//     private _increment(delta: number): void {
//         this._count += delta
//     }
//
//     @Mutation
//     private _decrement(delta: number): void {
//         this._count -= delta
//     }
// }
