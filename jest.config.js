module.exports = {
  preset: "ts-jest",
  cache: false,
  
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '\\.jsx?$': '<rootDir>/node_modules/babel-jest',

    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
    
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',

    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  
  // An array of regexp pattern strings that are matched against all source file paths,
  // matched files will skip transformation
  //
  // UNBEDINGT Notwendig für ES6 module!!!!
  //
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@mmit\/communication)"
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/'
};
