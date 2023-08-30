// Usage:
//      E2E_TEST='true' jest src/test/e2e/browser.specs.ts
// const isE2ETest = process.env.E2E_TEST === 'true';

module.exports = {
    // cache: false,

    preset: "ts-jest",

    // // A set of global variables that need to be available in all test environments
    // Define `ts-jest` config under `globals` is deprecated. Please do
    // transform: {
    //     <transform_regex>: ['ts-jest', { /* ts-jest config goes here in Jest */ }],
    // },
    // globals: {
    //     'ts-jest': {
    //         babelConfig: 'babel.config.js',
    //     },
    // },

    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
        'ts',
        'tsx'
    ],
    transform: {
        '\\.jsx?$': 'babel-jest',

        '^.+\\.vue$': '@vue/vue2-jest',

        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',

        "^.+\\.(ts|tsx)$": "ts-jest"
    },

    // An array of regexp pattern strings that are matched against all source file paths,
    // matched files will skip transformation
    //
    // UNBEDINGT Notwendig für ES6 module!!!!
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@mmit|vuetify|@mdi)/.*)'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },

    snapshotSerializers: [
        'jest-serializer-vue'
    ],

    // The test environment that will be used for testing
    //      https://jestjs.io/docs/en/configuration.html#testenvironment-string
    testEnvironment: 'jsdom',
    // testEnvironment: 'node',

    testMatch: [
        '<rootDir>/test/**/*.(spec|specs|test).(js|jsx|ts|tsx)'
    ],

    testEnvironmentOptions: {
         url: 'http://localhost/'
    },

    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts', "jest-extended/all"]
}

// if(isE2ETest) {
//   module.exports.globalSetup = "jest-environment-puppeteer/setup";
//   module.exports.globalTeardown = "jest-environment-puppeteer/teardown";
//   module.exports.testEnvironment = "jest-environment-puppeteer";
// }
