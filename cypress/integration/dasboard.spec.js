context("Register", () => {
  it("Tries to list user techs", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.viewport(1440, 900);

    cy.intercept("GET", `/users/015f8976-d70a-4a12-b545-47a52ad4f205`, {
      statusCode: 200,
    }).as("user-techs");
  });
  it("Tries to add new user techs", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/users/techs", {
      statusCode: 201,
      body: {
        title: "PHP",
        status: "Intermediário",
      },
    }).as("user-new-techs");
    cy.get("input[name=title]").type("PHP");
    cy.get("input[name=status]").type("Intermediário");
    cy.get("button[type=submit]").click();
  });
});
