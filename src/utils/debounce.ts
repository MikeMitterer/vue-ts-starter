/**
 * Führt eine Funktion nur nach einem bestimmten Timeout aus
 *
 * Usage:
 *      window.addEventListener('resize', debounce(drawChart))
 */
export const debounce = (callback: () => void, timeout: number = 500): () => void => {
    let timer: number | undefined
    return (): void => {
        if (typeof timer !== 'undefined') {
            window.clearTimeout(timer)
        }
        timer = window.setTimeout(() => {
            callback()
            timer = undefined
        }, timeout)
    }
}
