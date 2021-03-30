import { CounterStore } from '../interfaces/CounterStore'

type StoreProvider<T> = () => T

export interface RootState {
    loaded: boolean

    // Sample...
    counterStore: StoreProvider<CounterStore>

    init(): Promise<void>
}
