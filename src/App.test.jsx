/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { mount } from "@cypress/react";
import App from "./App";

describe("<App />", () => {
  it("renders learn react link", () => {
    mount(<App />);
    cy.findByText(/learn react/i).should("be.visible");
  });
});
