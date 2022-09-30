import Page from './page';

class Homepage extends Page {
  constructor() {
    super('./');
  }

  get pageTitle() { return $('[data-test-id="header-title-text"'); }
  get careersLink() { return $('[data-test-id="index-careers-link"]'); }


}
export default new Homepage();
