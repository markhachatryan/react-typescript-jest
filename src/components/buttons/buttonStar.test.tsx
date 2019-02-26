import * as React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import * as renderer from "react-test-renderer";

import { STAR_REPOSITORY, UNSTAR_REPOSITORY } from "../../query";
import ButtonStar from "./buttonStar";

const mocks = [
  {
    request: {
      query: STAR_REPOSITORY,
      variables: { id: "id" }
    },
    result: {}
  }
];

test("should render button without error", () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ButtonStar id={"123"} viewerHasStarred={false} />
    </MockedProvider>
  );
  const button = component.root.findByType("button");
  expect(button.children).toContain("Star");

  const componentClicked = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ButtonStar id={"123"} viewerHasStarred={true} />
    </MockedProvider>
  );
  const buttonClicked = componentClicked.root.findByType("button");
  expect(buttonClicked.children).toContain("Unstar");
});
