import { LoggerFactory } from '@mmit/logging'
import LoadOptions = google.LoadOptions

const chartsScriptUrl = 'https://www.gstatic.com/charts/loader.js'

let resolveInitPromise: (value: Charts) => void;
let rejectInitPromise: (reason?: unknown) => void;

// This promise handles the initialization
// status of the google maps script.
const initPromise = new Promise<Charts>((resolve, reject): void => {
    resolveInitPromise = resolve;
    rejectInitPromise = reject;
});

// let chartsLoaderPromise = null
const loadedPackages = new Map<string, Promise<Charts>>()

// Wird von Google über Namespaces definiert!!!!
interface Charts {
    /** Loads with `safeMode` enabled. */
     safeLoad(options: LoadOptions): Promise<void>;

     load(options: LoadOptions): Promise<void>;
     load(version: string | number, options: LoadOptions): Promise<void>;

    /** Legacy https://developers.google.com/chart/interactive/docs/basic_load_libs#updateloader */
     load(visualization: 'visualization', version: string | number, options: LoadOptions): Promise<void>;

    // tslint:disable-next-line:ban-types
    setOnLoadCallback(handler: Function): void;
}

export function gchartsInit(): Promise<Charts> {
    // If already included in the page:
    // @ts-ignore
    if (window.google && window.google.charts) {
        resolveInitPromise(window.google.charts)
        return initPromise
    }

    const script = document.createElement('script')
    script.async = true;
    script.defer = true;

    script.type = 'text/javascript'
    // @ts-ignore
    script.onload = () => resolveInitPromise(window.google.charts)
    script.src = chartsScriptUrl

    document.body.appendChild(script)

    setTimeout(() => {
        // @ts-ignore
        if (!window.google || !window.google.charts) {
            rejectInitPromise(new Error('Failed to load google api'));
        }
    }, 5000);

    return initPromise
}

export const loadGCharts = async (version: string, options: google.LoadOptions): Promise<Charts> => {
    const logger = LoggerFactory.getLogger('mmit.vue-ts-starter.utils.loadGCharts');

    // google.chart-Object
    const obj = await gchartsInit()

    // we get something like this: "current_packages-corechart-table"
    const settingsKey = version + '_' + JSON.stringify(options, Object.keys(options).sort())
        // tslint:disable-next-line
        .replaceAll(/["{}\[\]]/g,'').replaceAll(/[,:]/g,'-')

    if (loadedPackages.has(settingsKey)) {
        logger.info('Packages already loaded...')
        return loadedPackages.get(settingsKey) as Promise<Charts>
    }

    const loaderPromise = new Promise<Charts>((resolve) => {
        obj.load(version, options)
        obj.setOnLoadCallback(() => resolve(window.google.charts))
    })
    loadedPackages.set(settingsKey, loaderPromise)

    logger.info(`Charts initialized!`)
    return loaderPromise
}

