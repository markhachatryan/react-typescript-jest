import * as React from "react";
import Header from "./header";
import * as renderer from "react-test-renderer";

test("test for react test", () => {
  const component = renderer.create(<Header handelSubmitSearch={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
