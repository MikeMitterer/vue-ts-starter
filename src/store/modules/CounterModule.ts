import { CounterState, CounterStore } from '@/store/interfaces/CounterStore'
import Vue from 'vue'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '../index'

// /**
//  * Fügt Date eine neue Funktionalität hinzu
//  *
//  * Weitere Infos:
//  *      https://stackoverflow.com/a/8563517/504184
//  */
// interface Date { toISOString(): string }
// if ( !Date.prototype.toISOString ) {
//
//         const pad = (value: number) => {
//             let r = String(value)
//             if ( r.length === 1 ) {
//                 r = '0' + r;
//             }
//             return r;
//         }
//
//         Date.prototype.toISOString = function(): string {
//             return this.getUTCFullYear()
//                 + '-' + pad( this.getUTCMonth() + 1 )
//                 + '-' + pad( this.getUTCDate() )
//                 + 'T' + pad( this.getUTCHours() )
//                 + ':' + pad( this.getUTCMinutes() )
//                 + ':' + pad( this.getUTCSeconds() )
//                 + '.' + String( (this.getUTCMilliseconds() / 1000).toFixed(3) ).slice( 2, 5 )
//                 + 'Z';
//         };
// }

export default class CounterModule implements CounterStore {
    public readonly state: CounterState = Vue.observable({
        count: 350,
        dates: []
    })

    /**
     * Init wird durch den init im RootState angestoßen
     */
    // tslint:disable-next-line:no-empty
    public async init(): Promise<void> {
        setInterval(() => {
            this.state.dates.splice(0, this.state.dates.length)

            for (let index = 0; index < 50; index++) {
                this.state.dates.push({
                    now: new Date().toISOString(),
                    index
                })
            }
        }, 500)
    }

    public async increment(delta: number): Promise<void> {
        this.state.count += delta
    }

    public async decrement(delta: number): Promise<void> {
        this.state.count -= delta
    }
}
