import {browser, element, by, promise, ElementFinder} from 'protractor';

export class HomePage {
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

  getUniqueRoomTitle() {
    const title = element(by.id('machines-grid')).getText();
    this.highlightElement(by.id('machines-grid'));
    return title;
  }

  getDialogTitle() {
    const title = element(by.id('dTitle')).getText();
    this.highlightElement(by.id('dTitle'));
    return title;
  }

  getRoomTitle() {
    const title = element(by.id('roomTitle')).getText();
    return title;
  }

  getUrl(): string {
    if (window
      && 'location' in window
      && 'protocol' in window.location
      && 'pathname' in window.location
      && 'host' in window.location) {
      return window.location.protocol + '//' + window.location.host + window.location.pathname;
    }
    return null;
  }

  getUniqueMachine(Id: string) {
    this.highlightElement(by.id(Id));
    const title = element(by.id(Id)).getText();
    return title;
  }


  clickGayHall(){
    this.click('gayId');
  }

  clickPineHall(){
    this.click('pineId');
  }

  clickApartment(){
    this.click('the_apartmentsId');
  }

  clickRoomPanel(){
    this.click('home-rooms-card');
  }

  clickAllRooms(){
    this.click('allRooms');
  }


  buttonClickable(Id: string){
    return element(by.id(Id)).isEnabled();
  }

  boxChecked(Id: string){
    return element(by.id(Id));
  }

  getTextWithID(Id: string){
    const text = element(by.id(Id)).getText();
    return text;
  }

  getCardName() {
    const title = element(by.id('{{machine.room_id)}}')).getText();
    this.highlightElement(by.id('{{machine.room_id)}}'));
    return title;
  }

  getWashersTitle() {
    const title = element(by.id('home-machines-card-washer')).getText();
    this.highlightElement(by.id('home-machines-card-washer'));
    return title;
  }

  getDyersTitle() {
    const title = element(by.id('home-machines-card-dryer')).getText();
    this.highlightElement(by.id('home-machines-card-dryer'));
    return title;
  }

  getWashers() {
    return element.all(by.className('washer'));
  }

  getDryers() {
    return element.all(by.className('dryer'));
  }

  getBrokens() {
    return element.all(by.className('broken'));
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
