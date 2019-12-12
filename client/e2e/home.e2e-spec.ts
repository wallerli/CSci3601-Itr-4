import {HomePage} from './home.po';
import {browser, protractor} from 'protractor';
import {Key} from 'selenium-webdriver';

// This line (combined with the function that follows) is here for us
// to be able to see what happens (part of slowing things down)
// https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/

const origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function () {
  const args = arguments;

  // queue 100ms wait between test
  // This delay is only put here so that you can watch the browser do xits thing.
  // If you're tired of xit taking long you can remove this call or change the delay
  // to something smaller (even 0).
  origFn.call(browser.driver.controlFlow(), () => {
    return protractor.promise.delayed(0);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};


describe('Home Page(Gay Hall)', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
    page.navigateTo();
    page.click('gay');
  });

  afterEach(() => {
    browser.manage().deleteAllCookies();
  });

  it('should have the correct url', () => {
    browser.getCurrentUrl().then(function (url) {
      expect(url).toEqual('http://localhost:9000/home/gay');
    })
  });

  describe('Main Title on Home Page', () => {

    it('should get and highlight Home title attribute ', () => {
      expect(page.getTextFromField('app-title')).toEqual('Morris Laundry Facilities');
    });

    it('should still be on welcome page when click the home title ', () => {
      expect(page.elementExistsWithId('app-title'));
      page.click('app-title');
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:9000/welcome');
      })
    });
  });

  describe('Room Selector on Home Page', () => {

    it('should get and highlight room selector panel title attribute', () => {
      expect(page.getTextFromField('home-rooms-card')).toEqual('Select a Laundry Room to View');
    });

    it('should get and highlight each hall title attribute', () => {
      page.click('home-rooms-card');
      expect(page.getTextFromField('gayId')).toEqual('Gay Hall');
      expect(page.getTextFromField('independenceId')).toEqual('Independence Hall');
      expect(page.getTextFromField('blakelyId')).toEqual('Blakely Hall');
      expect(page.getTextFromField('spoonerId')).toEqual('Spooner Hall');
      expect(page.getTextFromField('green_prairieId')).toEqual('Green Prairie Hall');
      expect(page.getTextFromField('pineId')).toEqual('Pine Hall');
      expect(page.getTextFromField('the_apartmentsId')).toEqual('The Apartments');
      expect(page.getTextFromField('empty')).toEqual('All Rooms');
    });

    it('should get and highlight each hall availability attribute', () => {
      page.click('home-rooms-card');
      expect(page.getTextFromField('gayAvailability')).toEqual('2 / 9 vacant');
      expect(page.getTextFromField('independenceAvailability')).toEqual('5 / 15 vacant');
      expect(page.getTextFromField('blakelyAvailability')).toEqual('5 / 11 vacant');
      expect(page.getTextFromField('spoonerAvailability')).toEqual('0 / 6 vacant');
      expect(page.getTextFromField('green_prairieAvailability')).toEqual('3 / 7 vacant');
      expect(page.getTextFromField('pineAvailability')).toEqual('2 / 5 vacant');
      expect(page.getTextFromField('the_apartmentsAvailability')).toEqual('1 / 5 vacant');
      expect(page.getTextFromField('allRoomsAvailability')).toEqual('18 / 58 vacant');
    });
  });

  describe('Room Heading on Home Page', () => {

    it('should get and display correct room title', () => {
      expect(page.elementExistsWithId('roomTitle'));
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall');
    });

    it('should have and display correct availability of washers in gay hall', () => {
      expect(page.elementExistsWithId('washerAvail'));
      expect(page.getTextFromField('washerAvail')).toContain('2 vacant');
      expect(page.getTextFromField('washerAvail')).toContain('0 running');
      expect(page.getTextFromField('washerAvail')).toContain('0 broken');
    });

    it('should have and display correct availability of dryers in gay hall', () => {
      expect(page.elementExistsWithId('dryerAvail'));
      expect(page.getTextFromField('dryerAvail')).toContain('0 vacant');
      expect(page.getTextFromField('dryerAvail')).toContain('7 running');
      expect(page.getTextFromField('dryerAvail')).toContain('0 broken');
    });
  });

  describe('Cookie for default page', () => {

    it('should have a make default button with correct explanation', () => {
      expect(page.elementExistsWithId('defaultRoomButton'));
      expect(page.getTextFromClassName('default-selector-text')).toEqual('Remember current room on your next visit');
    });

    it('should have an unset default button with correct explanation after you make the page as default', () => {
      page.click('defaultRoomButton');
      expect(page.elementExistsWithId('unsetDefaultRoomButton'));
      expect(page.getTextFromClassName('default-selector-text')).toEqual('Remember current room on your next visit');
    });

    it('should set gay hall as default room', () => {
      page.click('defaultRoomButton');
      expect(page.elementExistsWithId('default-mark'));
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall default');
      page.navigateTo();
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:9000/home/gay');
      })
    });

    it('should set independence hall as default if we set it to be default after set any other before', () => {
      page.click('defaultRoomButton');
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall default');
      page.navigateTo();
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:9000/home/gay');
      })
      page.click('all-rooms');
      page.click('independenceId');
      expect(page.getTextFromField('roomTitle')).toEqual('Independence Hall');
      page.click('defaultRoomButton');
      expect(page.getTextFromField('roomTitle')).toEqual('Independence Hall default');
      page.click('all-rooms');
      page.click('gayId');
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall');
      page.navigateTo();
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:9000/home/independence');
      })
    });

    it('should stay at the same room after refresh the page with other room set to be default', () => {
      page.click('defaultRoomButton');
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall default');
      page.click('all-rooms');
      page.click('independenceId');
      expect(page.getTextFromField('roomTitle')).toEqual('Independence Hall');
      browser.refresh();
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:9000/home/independence');
      })
    });
  });

  describe('Graph on Home Page', () => {

    it('should get and display a graph', () => {
      expect(page.elementExistsWithId('predictionGraphTitle'));
    });

    it('should get and display the correct title for the graph', () => {
      expect(page.getTextFromField('predictionGraphTitle')).toEqual('Busy Time on ' + page.getDateToday());
    });

    it('should show the data of next day when you click the button with navigate_next icon', () => {
      page.click('next-day');
      expect(page.getTextFromField('predictionGraphTitle')).toEqual('Busy Time on ' + page.getNextDay());
    });

    it('should show the data of previous day when you click the button with navigate_before icon', () => {
      page.click('previous-day');
      expect(page.getTextFromField('predictionGraphTitle')).toEqual('Busy Time on ' + page.getPreviousDay());
    });
  });

  describe('Machines Panel on Home Page', () => {

    it('should get and have correct title for washers and dryers panel', () => {
      expect(page.getTextFromField('washer-grid')).toEqual('Washers Within Gay Hall');
      expect(page.getTextFromField('dryer-grid')).toEqual('Dryers Within Gay Hall');
    });

    it('should get and have specific machines', () => {
      expect(page.getTextFromField('69dacad2-ee11-11e9-8256-56000218142a')).toContain('Randy Mustard Wombat');
      expect(page.getTextFromField('69dacaa6-ee11-11e9-8256-56000218142a')).toContain('Dorky Gamboge Dog');
    });

    it('should get and have correct number of washers', () => {
      page.getAll('washer').then((washers) => {
        expect(washers.length).toBe(2);
      });
    });

    it('should get and have correct number of dryers', () => {
      page.getAll('dryer').then((dryers) => {
        expect(dryers.length).toBe(7);
      });
    });

    it('should get and have correct number of broken machines for each type', () => {
      page.getTwo('washer', 'unavailable').then((washer) => {
        expect(washer.length).toBe(0);
      });
      page.getTwo('dryer', 'unavailable').then((dryer) => {
        expect(dryer.length).toBe(0);
      });
    });

    it('should get and have correct number of running machines for each types', () => {
      page.getTwo('washer', 'inUse').then((washers) => {
        expect(washers.length).toBe(0);
      });
      page.getTwo('dryer', 'inUse').then((dryer) => {
        expect(dryer.length).toBe(7);
      });
    });

    it('should get and have correct number of vacant machines for each types', () => {
      page.getTwo('washer', 'vacant').then((washers) => {
        expect(washers.length).toBe(2);
      });
      page.getTwo('dryer', 'vacant').then((dryer) => {
        expect(dryer.length).toBe(0);
      });
    });

    it('should get and have a detail button', () => {
      page.elementExistsWithClassName('detailTextButton');
    });

    it('should get and have another button with dots or bell icon button', () => {
      page.elementExistsWithClassName('detailButton');
    });

    it('should count town/count up on the timer for each machine', () => {
      const a = page.getTextFromField('69dacad2-ee11-11e9-8256-56000218142a');
      browser.sleep(70000);
      browser.refresh();
      const b = page.getTextFromField('69dacad2-ee11-11e9-8256-56000218142a');
      expect(a).not.toEqual(b);
    }, 100000);
  });

  describe('Machine information dialog', () => {

    it('should open a corresponding dialog shows detailed information of the machine when click the detail button', () => {
      page.click('machineSubIcon-dorky-gamboge-dog');
      expect(page.getTextFromField('dorky gamboge dog-dialog-info')).toContain('Dorky Gamboge Dog');
      expect(page.getTextFromField('dorky gamboge dog-dialog-info')).toContain('Gay Hall');
      expect(page.getTextFromField('dorky gamboge dog-dialog-info')).toContain('Dryer');
      page.click('closeDialog2');
      page.click('machineSubIcon-bumpy-cerulean-molly');
      expect(page.getTextFromField('bumpy cerulean molly-dialog-info')).toContain('Bumpy Cerulean Molly');
      expect(page.getTextFromField('bumpy cerulean molly-dialog-info')).toContain('Gay Hall');
      expect(page.getTextFromField('bumpy cerulean molly-dialog-info')).toContain('Washer');
    });

    it('should not allow user to subscribe for a vacant machine', () => {
      page.click('machineSubIcon-bumpy-cerulean-molly');
      expect(page.getTextFromClassName('sub-title')).toContain('Cannot subscribe to this washer');
      expect(page.getTextFromClassName('sub-detail')).toContain('Subscription is only allowed to a running machine.');
    });

    it('should allow user to subscribe for an in-used machine', () => {
      page.click('machineSubIcon-dorky-gamboge-dog');
      expect(page.getTextFromClassName('sub-title')).toContain('Notify me when it is available');
      // tslint:disable-next-line:max-line-length
      expect(page.getTextFromClassName('sub-detail')).toContain('Subscribe to receive an email when the dryer is vacant. We will only send the notification once.');
    });

    // Having the issue that I could not do any information check on other sites.
    it('should open a report page by clicking Report An Issue button', () => {
      page.click('machineSubIcon-bumpy-cerulean-molly');
      expect(page.elementExistsWithClassName('reportButton'));
      page.click('reportButton');
      // browser.getCurrentUrl().then(function (url) {
      //   expect(url).toEqual('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Clayton%20A.%20Gay&entry.1000005=Laundry%20room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue%20with%20washer%20bumpy%20cerulean%20molly:');
      // });
    });

    describe('Machine subscription', () => {

      it('should have a none notification icon represent the in-used but unsubscribed machine', () => {
        expect(page.getTextFromField('machineSubIcon-dorky-gamboge-dog')).toEqual('notifications_none');
      });

      it('should have a more-vert icon represent the vacant machine', () => {
        expect(page.getTextFromField('machineSubIcon-bumpy-cerulean-molly')).toEqual('more_vert');
      });

      it('should have a active notification icon represent the in-used and subscribed machine', () => {
        page.click('machineSubIcon-dorky-gamboge-dog');
        page.field('emailField').clear();
        page.field('emailField').sendKeys('123@a.b');
        page.click('confirmAddSubButton');
        expect(page.getTextFromField('machineIsSubscribed')).toEqual('check Subscribed');
        page.click('closeDialog2');
        expect(page.getTextFromField('machineSubIcon-dorky-gamboge-dog')).toEqual('notifications_active');
      });

      it('should have the same icon if we do not save subscription in dialog', () => {
        page.click('machineSubIcon-dorky-gamboge-dog');
        page.field('emailField').clear();
        page.field('emailField').sendKeys('123@a.b');
        page.click('closeDialog2');
        expect(page.getTextFromField('machineSubIcon-dorky-gamboge-dog')).toEqual('notifications_none');
      });

      describe('Subscribe machine (Validation)', () => {

        beforeEach(() => {
          page.click('machineSubIcon-dorky-gamboge-dog');
        });

        it('Should show the validation error message about email being required', () => {
          expect(page.field('emailField').isPresent()).toBeTruthy('There should be an email field');
          page.field('emailField').clear();
          expect(page.button('confirmAddSubButton').isEnabled()).toBe(false);
          browser.actions().sendKeys(Key.TAB).perform();
          browser.actions().sendKeys(Key.TAB).perform();
          browser.actions().sendKeys(Key.TAB).perform();
          expect(page.getTextFromField('email-error')).toEqual('Email is required');
        });

        it('Should show the validation error message about email format', () => {
          expect(page.field('emailField').isPresent()).toBeTruthy('There should be an email field');
          page.field('emailField').clear();
          page.field('emailField').sendKeys('donjones.com');
          expect(page.button('confirmAddSubButton').isEnabled()).toBe(false);
          browser.actions().sendKeys(Key.TAB).perform();
          expect(page.getTextFromField('email-error')).toEqual('Email must be formatted properly');
        });
      });
    });
  });

  describe('Validation of subscription of rooms', () => {

    beforeEach(() => {
      page.navigateTo();
    });

    it('should have an enabled subscribe button when click gay hall', () => {
      page.click('gay');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
    });

    it('should have an enabled subscribe button when click the apartments', () => {
      page.click('the_apartments');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
    });

    it('should have an enabled subscribe button when click spooner hall', () => {
      page.click('spooner');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
    });

    it('should have an enabled subscribe button when click pine hall', () => {
      page.click('pine');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
    });

    it('should have a disabled subscribe button when click independence hall', () => {
      page.click('independence');
      expect(page.button('subscribeButton').isEnabled()).toBe(false);
    });

    it('should have a disabled subscribe button when click green prairie hall', () => {
      page.click('green_prairie');
      expect(page.button('subscribeButton').isEnabled()).toBe(false);
    });

    it('should have a disabled subscribe button when click blakely hall', () => {
      page.click('blakely');
      expect(page.button('subscribeButton').isEnabled()).toBe(false);
    });
  });

  describe('Subscribe valid room', () => {

    beforeEach(() => {
      page.navigateTo();
    });

    it('should have a subscribe button when you select a specific room', () => {
      page.click('gay');
      expect(page.elementExistsWithId('subscribeButton'));
    });

    it('should have a disabled subscribe button when you select green prairie hall', () => {
      page.click('green_prairie');
      expect(page.button('subscribeButton').isEnabled()).toBeFalsy();
      expect(page.getTextFromField('subscribeButton')).toEqual('Subscribe notifications_none');
    });

    it('should have a enabled subscribe button when you select gay hall', () => {
      page.click('gay');
      expect(page.button('subscribeButton').isEnabled()).toBeTruthy();
      expect(page.getTextFromField('subscribeButton')).toEqual('Subscribe notifications_none');
    });

    it('should open a dialog when click an enabled subscribe button in the apartment', () => {
      page.click('gay');
      page.click('subscribeButton');
      expect(page.elementExistsWithId('sub-title'));
      expect(page.getTextFromField('sub-title')).toEqual('New Subscription');
    });

    /*
     * In this test, we want to test that we have the correct checked/default
     * value we pre-set based on the condition. We manually test the value to
     * be correct but we can not figure out how to do it in code, even with
     * discussion with Professor K.K., so we skipped this test.
     */
    xit('should have correct checked field for the opened dialog when click an enabled subscribe button', async () => {
      // expect(page.boxChecked('sub-dryer').checked).toBe(true);
      // expect(page.boxChecked('sub-type').isSelected()).toBe(true);
      // const subDryer = element(by.css('mat-radio-button[id=sub-dryer]'));
      // expect(subDryer.getAttribute('class')).toContain('checked');
      // expect(subDryer.attributes.length).toContain('disabled');
      // const subDryerAttri = subDryer.getAttribute('mat-radio-checked');
      // expect(subDryerAttri).not.toBe(null);
      // expect(await subDryerAttri).toBeTruthy();
    });

    /*
     * In this test, we want to test that we have the correct disabled value
     * we pre-set based on the condition. We manually test the value to be
     * correct but we can not figure out how to do it in code, even with
     * discussion with Professor K.K., so we skipped this test.
     */
    xit('should have a disabled check box for washer', () => {
      // expect(page.buttonClickable('sub-washer')).toBe(false);
      // const subWasher = element(by.css('mat-radio-button[id=sub-washer]'));
      // expect(subWasher.getAttribute('class')).toContain('disabled');
      // const subWasherAttri = subWasher.getAttribute('[disabled]');
      // expect(subWasherAttri).not.toBe(null);
      // expect(element(by.css('mat-radio-button[id=sub-washer]')).getAttribute('disabled')).toBeTruthy();
      // expect(element(by.id('sub-washer')).getAttribute('disabled')).toBe('disabled');
      // expect(page.field('sub-washer').isEnabled()).toBe(false);
      // expect(page.getTextFromField('sub-washer-true')).toBe('washer');
      // expect(page.getTextFromField('sub-dryer-false')).toBe('dryer');
    });

    it('should have an active notification icon represent the subscribed room', () => {
      page.click('gay');
      page.click('subscribeButton');
      page.field('emailField').clear();
      page.field('emailField').sendKeys('123@a.b');
      page.click('confirmAddSubButton');
      expect(page.button('subscribeButton').isEnabled()).toBe(false);
      expect(page.getTextFromField('subscribeButton')).toEqual('Subscribed notifications_active');
    });

    it('should have no changes if nothing saved in subscription dialog', () => {
      page.click('gay');
      page.click('subscribeButton');
      page.field('emailField').clear();
      page.field('emailField').sendKeys('123@a.b');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
      page.click('exitWithoutAddingButton');
      expect(page.getTextFromField('subscribeButton')).toEqual('Subscribe notifications_none');
    });

    describe('Subscribe (Validation)', () => {

      beforeEach(() => {
        page.click('gay');
        page.click('subscribeButton');
      });

      afterEach(() => {
        page.click('exitWithoutAddingButton');
      });

      it('Should show the validation error message about email being required', () => {
        expect(page.field('emailField').isPresent()).toBeTruthy('There should be an email field');
        page.field('emailField').clear();
        expect(page.button('confirmAddSubButton').isEnabled()).toBe(false);
        browser.actions().sendKeys(Key.TAB).perform();
        browser.actions().sendKeys(Key.TAB).perform();
        expect(page.getTextFromField('email-error')).toEqual('Email is required');
      });

      it('Should show the validation error message about email format', () => {
        expect(page.field('emailField').isPresent()).toBeTruthy('There should be an email field');
        page.field('emailField').clear();
        page.field('emailField').sendKeys('donjones.com');
        expect(page.button('confirmAddSubButton').isEnabled()).toBe(false);
        browser.actions().sendKeys(Key.TAB).perform();
        expect(page.getTextFromField('email-error')).toEqual('Email must be formatted properly');
      });
    });
  });
});

