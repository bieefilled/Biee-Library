// eslint-disable-next-line no-unused-vars
import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";
import { Test } from "./index";

describe("test", () => {
  test("test component renders correctly", () => {
    const component = renderer.create(<Test />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("The test prop works", () => {
    const component = renderer.create(<Test name="samuel" />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
