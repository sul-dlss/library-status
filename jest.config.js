export default {
  testEnvironment: "jsdom",
  roots: ["./__tests__/", "src/"],
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!**/node_modules/**"],
  moduleNameMapping: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: ["**/__tests__/**/*.(js|jsx)", "**/*.(test|spec).(js|jsx)"],
  extensionsToTreatAsEsm: [".jsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  transform: {
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      {
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/(?!(.*\\.mjs$))"],
};
