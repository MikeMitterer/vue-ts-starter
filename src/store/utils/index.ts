import { Store } from 'vuex'
import { RootState } from '../interfaces/RootState'

export function isNotRegistered(moduleName: string, rootStore: object): boolean {
    return !(moduleName in rootStore)
}
