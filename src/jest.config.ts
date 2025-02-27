import type { Config } from 'jest';

const config: Config = {
  // Preset utilizado para testes com Babel
  preset: 'ts-jest',  // Remova ou substitua este preset, se estiver utilizando outro
  testEnvironment: 'node',
  
  // Direciona o Jest para usar Babel para transformar os arquivos .ts
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  
  moduleFileExtensions: ['ts', 'tsx', 'js'],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  roots: ['<rootDir>/src'],
  
  clearMocks: true,
  testLocationInResults: true,

  testMatch: [
    '*/src//.{test,spec}.ts',
  ],

  globals: {
    'ts-jest': {
      useESM: true,
    },
  },

  transformIgnorePatterns: [
    "/node_modules/(?!supertest)/",
  ],
  extensionsToTreatAsEsm: ['.ts'],
};

export default config;
