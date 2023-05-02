// eslint-disable-next-line no-unused-vars
import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, it, test } from "vitest";
import { Input } from "./index";

describe("Input", () => {
  it("Input component renders correctly", () => {
    const component = renderer.create(<Input name="Click Me" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("The Input prop works", () => {
    const component = renderer.create(
      <Input
        onChange={() => {
          console.log("working");
        }}
        name="primary"
        type="tel"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
