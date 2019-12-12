import {browser, by, element, promise} from 'protractor';

export class HomePage {

  Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  getDateToday() {
    const today = new Date();
    const dd: number = today.getDay();
    return this.Days[dd];
  }

  getNextDay() {
    const today = new Date();
    const dd: number = today.getDay() + 1;
    return this.Days[dd % 7];
  }

  getPreviousDay() {
    const today = new Date();
    const dd: number = today.getDay() - 1;
    return this.Days[dd % 7];
  }

  navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }

  // http://www.assertselenium.com/protractor/highlight-elements-during-your-protractor-test-run/
  highlightElement(byObject) {
    // tslint:disable-next-line:no-shadowed-variable
    function setStyle(element, style) {
      const previous = element.getAttribute('style');
      element.setAttribute('style', style);
      setTimeout(() => {
        element.setAttribute('style', previous);
      });
      return 'highlighted';
    }
    return browser.executeScript(setStyle, element(byObject).getWebElement(), 'color: red; background-color: yellow;');
  }

  getAll(cssOfElement: string) {
    return element.all(by.className(cssOfElement));
  }

  getTwo(cssOfElement1: string, cssOfElement2: string) {
    const items = element.all(by.className(cssOfElement1));
    return items.all(by.className(cssOfElement2));
  }

  elementExistsWithId(idOfElement: string): promise.Promise<boolean> {
    if (element(by.id(idOfElement)).isPresent()) {
      this.highlightElement(by.id(idOfElement));
    }
    return element(by.id(idOfElement)).isPresent();
  }

  elementExistsWithClassName(cssOfElement: string): promise.Promise<boolean> {
    if (element(by.className(cssOfElement)).isPresent()) {
      this.highlightElement(by.className(cssOfElement));
    }
    return element(by.className(cssOfElement)).isPresent();
  }

  click(idOfButton: string): promise.Promise<void> {
    this.highlightElement(by.id(idOfButton));
    return element(by.id(idOfButton)).click();
  }

  field(idOfField: string) {
    return element(by.id(idOfField));
  }

  button(idOfButton: string) {
    this.highlightElement(by.id(idOfButton));
    return element(by.id(idOfButton));
  }

  getTextFromField(idOfField: string) {
    this.highlightElement(by.id(idOfField));
    return element(by.id(idOfField)).getText();
  }

  getTextFromClassName(cssOfElement: string) {
    this.highlightElement(by.className(cssOfElement));
    return element(by.className(cssOfElement)).getText();
  }
}
