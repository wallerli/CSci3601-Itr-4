import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  highlightElement(byObject) {
    function setStyle(element, style) {
      const previous = element.getAttribute('style');
      element.setAttribute('style', style);
      setTimeout(() => {
        element.setAttribute('style', previous);
      }, 200);
      return 'highlighted';
    }
    return browser.executeScript(setStyle, element(byObject).getWebElement(), 'color: red; background-color: yellow;');
  }

  getTextFromField(idOfField: string) {
    this.highlightElement(by.id(idOfField));
    return element(by.id(idOfField)).getText();
  }
}
