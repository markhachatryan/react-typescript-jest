import * as React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { OWNER_REPOSITORY } from "../../query";
import * as renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import Owner from "./owner";

const mocks: any = [
  {
    request: {
      query: OWNER_REPOSITORY,
      variables: {
        login: "login"
      }
    },
    result: {}
  }
];

test("renders without error", async () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <Owner />
      </MemoryRouter>
    </MockedProvider>
  );
});
