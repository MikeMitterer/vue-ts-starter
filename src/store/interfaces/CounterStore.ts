export const counterStore: { readonly NAME: string } = {
    // Name muss immer gleich sein wie der Name des Moduls
    NAME: 'counterModule'
}

export interface CounterStore {
    count: number

    init(): Promise<void>

    increment(delta: number): Promise<number>

    decrement(delta: number): Promise<number>
}
