import * as React from "react";
import Spinner from "./spinner";
import * as renderer from "react-test-renderer";

test("test for react test", () => {
    const component = renderer.create(<Spinner />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
