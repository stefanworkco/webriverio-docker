import Careers from '../page-objects/careers.page';

describe('Careers page', () => {
  it('Careers has quote', () => {
    Careers.open();
    const quoteText = '“Work & Co’s employees are treated a bit differently… This might be why the agency has a 93 percent employee retention rate.”'
    expect(Careers.quote).toHaveText(quoteText);
  });
  it('Careers page - logo is visible', () => {
    expect(Careers.logo).toBeDisplayed();
  });

  it("Verify Technology link)", () => {
    expect(Careers.technologyLink).toHaveAttribute("href", "/careers/technology/");
  });
});
