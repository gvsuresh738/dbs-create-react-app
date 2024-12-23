module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|sass|scss)$": "identity-obj-proxy", // Mock CSS files
    },
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for TypeScript files
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Optional: Add global Jest setup if needed
};