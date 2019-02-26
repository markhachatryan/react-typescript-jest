import * as React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { SEARCH_QUERY } from "../../query";
import * as renderer from "react-test-renderer";
import Home from "./home";


const mocks = [
  {
    request: {
      query: SEARCH_QUERY,
      variables: {
        Search: "test"
      }
    },
    result: {
      data: {
        search: {
          edges: [{}]
        }
      }
    }
  }
];

test("renders without error", () => {
  renderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <Home />
    </MockedProvider>
  );
});
