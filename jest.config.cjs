/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  resolver: "jest-ts-webcompat-resolver",
  testMatch: ["**/src/**/*.test.ts"],
  collectCoverageFrom: [
    "**/src/**/*.ts",
    "!**/src/index.ts",
    "!**/server/index.ts",
  ],
};
