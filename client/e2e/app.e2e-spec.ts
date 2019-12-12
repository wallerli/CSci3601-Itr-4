import {AppPage} from './app.po';
import {browser} from "protractor";

describe('App Component', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load', () => {
    page.navigateTo();
  });

  it('should have the correct url', () => {
    page.navigateTo();
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/welcome')
    })
  });

  it('should get and highlight Home title attribute ', () => {
    page.navigateTo();
    expect(page.getTextFromField('app-title')).toEqual('Morris Laundry Facilities');
  });
});
