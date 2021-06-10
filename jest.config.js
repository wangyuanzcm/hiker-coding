module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  // "transformIgnorePatterns": [`<rootdir>/node_modules/(?!${esModules})`],
  // "transform": {
  //   "^.+\\.js$": "babel-jest"
  // },
  // "testEnvironment": "node",
  // "testMatch": [
  //   "**/tests/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],
  "coverageDirectory": "<rootDir>/dist/coverage",
  // "reporters": [
  //   "default",
  //   [
  //     "jest-stare",
  //     {
  //       "resultDir": "dist/jest-stare",
  //       "reportTitle": "jest-stare!",
  //       "additionalResultsProcessors": [
  //         "jest-junit"
  //       ],
  //       "coverageLink": "../coverage/lcov-report/index.html",
  //       "jestStareConfigJson": "jest-stare.json",
  //       "jestGlobalConfigJson": "globalStuff.json"
  //     }
  //   ]
  // ]
}