module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["/*.{js,jsx,ts,tsx}", "!/*.d.ts", "!/node_modules/"],
  coveragePathIgnorePatterns: [".stories.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  },
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
