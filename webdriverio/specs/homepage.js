import Homepage from "../page-objects/homepage.page";

describe("Homepage tests", () => {
  it("Homepage has header title", () => {
    Homepage.open();
    expect(Homepage.pageTitle).toHaveText(
      "We design and ship digital products that transform companies."
    );
  });
  it("Homepage logo is visible", () => {
    expect(Homepage.logo).toBeDisplayed();
  });

  it("Click on careers link and verify url and page title", () => {
    Homepage.careersLink.click();
    expect(browser).toHaveUrlContaining("/careers");
    expect(browser).toHaveTitle("Careers | Work & Co");
  });
});
