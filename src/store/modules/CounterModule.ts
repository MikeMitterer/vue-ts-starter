import { Module, VuexModule, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '../index';

@Module({ dynamic: true, namespaced: true, name: 'counter', store })
class CounterModule extends VuexModule {
    public count = 150;

    @Mutation
    public increment(delta: number) {
        this.count += delta;
    }

    @Mutation
    public decrement(delta: number) {
        this.count -= delta;
    }

    // action '_increment' commits mutation 'increment' when done with return value as payload
    @Action({ commit: 'increment' })
    private _increment() {
        return 5;
    }
    // action '_decrement' commits mutation 'decrement' when done with return value as payload
    @Action({ commit: 'decrement' })
    private _decrement() {
        return 5;
    }
}

export default getModule(CounterModule);
