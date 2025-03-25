/** @type {import('jest').Config} */
module.exports = {
  preset: "react-native",
  testEnvironment: "node",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native)/)",
  ],
};
