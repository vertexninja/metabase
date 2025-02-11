import {
  restore,
  popover,
  visualize,
  startNewQuestion,
} from "__support__/e2e/cypress";

export function issue17963() {
  describe("issue 17963", () => {
    beforeEach(() => {
      restore("mongo-4");
      cy.signInAsAdmin();

      startNewQuestion();
      cy.findByText("QA Mongo4").click();
      cy.findByText("Orders").click();
    });

    it("should be able to compare two fields using filter expression (metabase#17963)", () => {
      cy.findByText("Add filters to narrow your answer").click();

      popover()
        .contains("Custom Expression")
        .click();

      typeAndSelect([
        { string: "dis", field: "Discount" },
        { string: "> qu", field: "Quantity" },
      ]);

      cy.button("Done").click();

      cy.findByText("Discount > Quantity");

      cy.findByText("Pick the metric you want to see").click();
      cy.findByText("Count of rows").click();

      visualize();

      cy.get(".ScalarValue").contains("1,337");
    });
  });

  function typeAndSelect(arr) {
    arr.forEach(({ string, field }) => {
      cy.get(".ace_text-input").type(string);

      popover()
        .contains(field)
        .click();
    });
  }
}
