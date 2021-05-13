import React from "react";
import { mount } from "@cypress/react";
import Login from "./Login";

describe("<Login>", () => {
  it("playground", () => {
    mount(<Login />);
    cy.get("input[type!=password]").type("strasbourg");
    cy.get("input[type=password]").type("p@ssw0rd!");
    cy.get("button").click();
    cy.contains("Welcome strasbourg").should("be.visible");
  });
});
