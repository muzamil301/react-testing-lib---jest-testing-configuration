module.exports = {
  transformIgnorePatterns: [
    "<rootDir>/.storybook/",
    "<rootDir>/node_modules/",
    "<rootDir>/build/",
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.ts",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
  },
};
