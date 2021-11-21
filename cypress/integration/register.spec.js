context("Register", () => {
  it("Enters the landing page and tries to go to the register page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.contains("Sign-up").click();
  });
  it("Tries to register a new user", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/users", {
      statusCode: 201,
      body: {
        name: "Mônica",
        course_module: "Q2",
        bio: "teste",
        contact: "1425788",
        email: "moonteste@mail.com",
        password: "14725836",
        passwordConf: "14725836",
      },
    }).as("new-user");
    cy.get("input[name=name]").type("Monica");
    cy.get("input[name=course_module]").type("Q2");
    cy.get("input[name=bio]").type("teste");
    cy.get("input[name=contact]").type("1425788");
    cy.get("input[name=email]").type("moonteste@mail.com");
    cy.get("input[name=password]").type("14725836");
    cy.get("input[name=passwordConf]").type("14725836");
    cy.get("button[type=submit]").click();

    cy.contains("Sign-in").click();
  });
});
