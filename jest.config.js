
const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
    testRegex: TEST_REGEX,
    transformIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    collectCoverage: false,
    modulePaths: ['<rootDir>/pages'],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
};
