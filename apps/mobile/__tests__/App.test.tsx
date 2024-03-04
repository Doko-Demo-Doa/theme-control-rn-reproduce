/**
 * @format
 */
/// <reference types="node" />
import React from "react";
import "react-native";
import App from "../App";

// Note: import explicitly to use the types shipped with jest.
// import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import "react-native";

beforeEach(() => {
  jest.resetModules();
  const originalEnv = process.env;
  process.env = {
    ...originalEnv,
    NODE_ENV: "development",
  };
});

it("renders correctly", () => {
  renderer.create(<App />);
});
