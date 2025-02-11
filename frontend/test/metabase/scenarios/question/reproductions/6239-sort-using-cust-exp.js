import {
  openOrdersTable,
  popover,
  restore,
  visualize,
  summarize,
} from "__support__/e2e/cypress";

export function issue6239() {
  describe("issue 6239", () => {
    beforeEach(() => {
      restore();
      cy.signInAsAdmin();

      openOrdersTable({ mode: "notebook" });

      summarize({ mode: "notebook" });
      cy.findByText("Custom Expression").click();

      cy.get(".ace_text-input")
        .type("CountIf([Total] > 0)")
        .blur();

      cy.findByPlaceholderText("Name (required)").type("CE");
      cy.button("Done").click();

      cy.findByText("Pick a column to group by").click();
      popover()
        .contains("Created At")
        .first()
        .click();
    });

    it("should be possible to sort by using custom expression (metabase#6239)", () => {
      cy.findByText("Sort").click();
      popover()
        .contains(/^CE$/)
        .click();

      visualize();

      // Line chart renders initially. Switch to the table view.
      cy.icon("table2").click();

      cy.get(".cellData")
        .eq(1)
        .should("contain", "CE")
        .and("have.descendants", ".Icon-chevronup");

      cy.get(".cellData")
        .eq(3)
        .invoke("text")
        .should("eq", "1");

      // Go back to the notebook editor
      cy.icon("notebook").click();

      // Sort descending this time
      cy.icon("arrow_up").click();
      cy.icon("arrow_up").should("not.exist");
      cy.icon("arrow_down");

      visualize();

      cy.get(".cellData")
        .eq(1)
        .should("contain", "CE")
        .and("have.descendants", ".Icon-chevrondown");

      cy.get(".cellData")
        .eq(3)
        .invoke("text")
        .should("eq", "584");
    });
  });
}
