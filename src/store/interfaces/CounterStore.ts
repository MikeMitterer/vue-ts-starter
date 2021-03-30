import { DeepReadonly } from 'ts-essentials'

export interface Now {
    now: string, index: number
}

export interface CounterState {
    count: number
    dates: Now[]
}

export interface CounterStore {
    readonly state: DeepReadonly<CounterState>

    init(): Promise<void>

    increment(delta: number): Promise<void>

    decrement(delta: number): Promise<void>
}
