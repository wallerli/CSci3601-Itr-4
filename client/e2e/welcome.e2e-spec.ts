import {WelcomePage} from './welcome.po';
import {browser} from "protractor";

xdescribe('Welcome Page', () => {
  let page: WelcomePage;

  beforeEach(() => {
    page = new WelcomePage();
  });

  it('should have the correct url', () => {
    page.navigateTo();
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/welcome');
    })
  });

  it('should get and highlight Home title attribute ', () => {
    page.navigateTo();
    expect(page.getTextFromField('app-title')).toEqual('Morris Laundry Facilities');
  });

  it('should still be on welcome page when click the home title ', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('app-title'));
    page.click('app-title');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/welcome');
    })
  });

  it('should have correct room selector title', () => {
    page.navigateTo();
    expect(page.getTextFromField('welcomeSelectorTitle')).toEqual('Please Select a Room Below');
  });

  it('should have Gay Hall button and direct to the correct page', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('gay'));
    expect(page.getTextFromField('gay')).toEqual('Gay Hall');
    page.click('gay');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/gay');
    })
  });

  it('should have Independence Hall button and direct to the correct page', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('independence'));
    expect(page.getTextFromField('independence')).toEqual('Independence Hall');
    page.click('independence');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/independence');
    })
  });

  it('should have Blakely Ball button and direct to the correct page', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('blakely'));
    expect(page.getTextFromField('blakely')).toEqual('Blakely Hall');
    page.click('blakely');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/blakely');
    })
  });

  it('should have Spooner Hall button and direct to the correct page', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('spooner'));
    expect(page.getTextFromField('spooner')).toEqual('Spooner Hall');
    page.click('spooner');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/spooner');
    })
  });

  it('should have Pine Hall button and direct to the correct page', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('pine'));
    expect(page.getTextFromField('pine')).toEqual('Pine Hall');
    page.click('pine');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/pine');
    })
  });

  it('should have The Apartments button and direct to the correct page', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('the_apartments'));
    expect(page.getTextFromField('the_apartments')).toEqual('The Apartments');
    page.click('the_apartments');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/the_apartments');
    })
  });

  it('should have Green Prairie Hall button and direct to the correct page', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('green_prairie'));
    expect(page.getTextFromField('green_prairie')).toEqual('Green Prairie Hall');
    page.click('green_prairie');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/green_prairie');
    })
  });

  it('should have All Rooms button and direct to the correct page', () => {
    page.navigateTo();
    expect(page.elementExistsWithId('empty'));
    expect(page.getTextFromField('empty')).toEqual('All Rooms');
    page.click('empty');
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/all');
    })
  });

  it('should have correct address information', () => {
    page.navigateTo();
    expect(page.elementExistsWithClassName('morrisAddress'));
    expect(page.getTextFromClassName('morrisAddress'))
      .toEqual(
        'Morris Laundry Facilities\n' +
      'University of Minnesota Morris\n' +
      '600 E 4th St., Morris, MN 56267-2132');
  });
});
