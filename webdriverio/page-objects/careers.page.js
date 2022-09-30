import Page from './page';

class Careers extends Page {
  constructor() {
    super('./careers');
  }

  get quote() { return $('[data-test-id="undefined-section-quote"'); }
  get technologyLink() { return $('[data-test-id="grid-item-technology-link"]'); }

}
export default new Careers();
