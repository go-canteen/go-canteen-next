const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/tests/",
    "next.config.js",
    "jest.config.ts",
  ],
};
module.exports = createJestConfig(customJestConfig);
