module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  preset: "ts-jest",
  // testEnvironment: "node",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
