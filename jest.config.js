const { defaults } = require("jest-config");
const path = require("path");

// module.exports = {
//   bail: true,
//   moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
//   roots: ["src"],
//   testMatch: ["<rootDir>/src/**/?(*.)test.{ts,tsx,js,jsx}"],
//   transform: {
//     "^.+\\.(tsx)?$": "ts-jest"
//   },
//   verbose: true
// };

module.exports = {
  roots: ["src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  // testMatch: ["<rootDir>/src/**/?(*.)test.{ts,tsx,js,jsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": `${__dirname}/__mocks__/styleMock.js`,
    "\\.(gif|ttf|eot|svg)$": `${__dirname}/__mocks__/fileMock.js`
  },
  setupFilesAfterEnv: [`./testSetup.js`]
};
