module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
//   transform: {
//     ".+\\.(css|styl|less|sass|scss|jsx)$": "jest-css-modules-transform"
//   },
};
