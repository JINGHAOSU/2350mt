module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  roots: ['src'],
  // transform: { '^.+\\.tsx?$': 'ts-jest' },
  // https://github.com/facebook/jest/issues/6051
  // https://github.com/facebook/jest/issues/6674
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
};
