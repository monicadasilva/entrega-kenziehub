context("Login", () => {
  it("Tries to login", () => {
    cy.visit("http://localhost:3000/signin");
    cy.viewport(1440, 900);

    cy.intercept("POST", "/sessions", {
      statusCode: 200,
      body: {
        email: "moonteste@mail.com",
        password: "14725836",
      },
    }).as("login");
    cy.get("input[name=email]").type("moonteste@mail.com");
    cy.get("input[name=password]").type("14725836");
    cy.get("button[type=submit]").click();

    cy.contains("Dashboard").click();
  });
});
