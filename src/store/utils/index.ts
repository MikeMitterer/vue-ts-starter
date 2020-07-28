import { Store } from 'vuex'
import { RootState } from '../interfaces/RootState'

export function isNotRegistered(moduleName: string, rootStore: Store<RootState>): boolean {
    // tslint:disable-next-line:no-any
    return !(rootStore && rootStore.state && (rootStore.state as any)[moduleName])
}
