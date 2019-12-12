import {browser, element, by, promise} from 'protractor';

export class WelcomePage {

  navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }

  // http://www.assertselenium.com/protractor/highlight-elements-during-your-protractor-test-run/
  highlightElement(byObject) {
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

  getTextFromField(idOfField: string) {
    this.highlightElement(by.id(idOfField));
    return element(by.id(idOfField)).getText();
  }

  getTextFromClassName(cssOfElement: string) {
    this.highlightElement(by.className(cssOfElement));
    return element(by.className(cssOfElement)).getText();
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

}
