/// <reference types="cypress" />

context("Window", () => {
  it("cy.window() - get the global window object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "top");
  });
});
