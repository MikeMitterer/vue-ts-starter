type StoreProvider<T> = () => T

export interface RootState {
    loaded: boolean

    // Sample...
    // counterStore: StoreProvider<CounterStore>
}
