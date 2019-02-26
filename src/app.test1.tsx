import * as React from "react";
// import { shallow, mount } from "enzyme";
import * as renderer from "react-test-renderer";
import App from "./app";
import Home from "./components/home/home";
// import Owner from "./components/owner/owner";
import { MemoryRouter } from "react-router";
// import { Route } from "react-router-dom";

import { MockedProvider } from "react-apollo/test-utils";
it("renders without error", () => {
  const component = renderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <App />
      </MemoryRouter>
    </MockedProvider>
  );
  const home = renderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <Home />
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree).toContain(home);
});

// describe("routes using memory router", () => {
//   test("should show Home component", () => {
//     const component = mount(
//       <MockedProvider mocks={[]} addTypename={false}>
//         <MemoryRouter initialEntries={["/"]}>
//           <App />
//         </MemoryRouter>
//       </MockedProvider>
//     );
//     expect(component.find(Home)).toHaveLength(1);
//   });

//   // it("should show No match component for route not defined", () => {
//   //   const component = mount(
//   //     <MemoryRouter initialEntries={["/unknown"]}>
//   //       <App />
//   //     </MemoryRouter>
//   //   );
//   //   expect(component.find(NoMatch)).toHaveLength(1);
//   // });
// });
