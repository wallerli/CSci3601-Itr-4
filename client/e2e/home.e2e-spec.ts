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

  xdescribe('Main Title on Home Page', () => {

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

  xdescribe('Room Selector on Home Page', () => {

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

  xdescribe('Room Heading on Home Page', () => {

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

  xit('should display a graph when a room is selected', () => {
    page.clickGayHall();
    expect(page.elementExistsWithId('predictionGraphTitle'));
  });

  xit('should get and have correct title for gay\'s washers and dryers panel', () => {
    page.navigateTo();
    page.clickGayHall();
    expect(page.getUniqueRoomTitle()).toEqual('Machines at Gay Hall');
  });

  xit('should get and have specific machines', () => {
    page.navigateTo();
    expect(page.getUniqueMachine('69dacaa9-ee11-11e9-8256-56000218142a')).toContain('Flaky Red Buffalo');
    expect(page.getUniqueMachine('69dacaa6-ee11-11e9-8256-56000218142a')).toContain('Dorky Gamboge Dog');
  });

  xit('should get and have correct number of gay\'s washers', () => {
    page.navigateTo();
    page.clickGayHall();
    page.getWashers().then((washers) => {
      expect(washers.length).toBe(2);
    });
  });

  xit('should get and have correct number of gay\'s dryers', () => {
    page.navigateTo();
    page.clickGayHall();
    page.getDryers().then((dryers) => {
      expect(dryers.length).toBe(7);
    });
  });

  xit('should get and have correct number of gay\'s broken machines', () => {
    page.navigateTo();
    page.clickGayHall();
    page.getBrokens().then((brokens) => {
      expect(brokens.length).toBe(0);
    });
  });

  xit('should get and have correct number of washers and dryers in total when click All Rooms', () => {
    page.navigateTo();
    page.clickGayHall();
    page.clickRoomPanel();
    page.clickAllRooms();
    page.getWashers().then((washers) => {
      expect(washers.length).toBe(28);
    });
    page.getDryers().then((dryers) => {
      expect(dryers.length).toBe(32);
    });
  });

  xit('should open a report page', () => {
    page.navigateTo();
    page.clickGayHall();
    expect(page.click('reportId'));
  });

  xit('should change time left in panel title', () => {
    page.navigateTo();
    const a = page.getUniqueMachine('69dacaa7-ee11-11e9-8256-56000218142a');
    browser.sleep(70000);
    page.navigateTo();
    const b = page.getUniqueMachine('69dacaa7-ee11-11e9-8256-56000218142a');
    expect(a).not.toEqual(b);
  }, 100000);

  xdescribe('Cookie default page', () => {

    it('should have a make default button when you select a specific room', () => {
      page.navigateTo();
      page.clickGayHall();
      expect(page.elementExistsWithId('defaultRoomButton'));
    });

    it('should have an unset default button when you set a room to be default', () => {
      page.navigateTo();
      page.clickGayHall();
      page.click('defaultRoomButton');
      expect(page.elementExistsWithId('unsetDefaultRoomButton'));
    });

    it('should set gay hall as default room', () => {
      page.navigateTo();
      page.click('gayId');
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall');
      page.click('defaultRoomButton');
      page.navigateTo();
      expect(page.elementExistsWithId('default-mark'));
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall default');
    });

    it('should set independence hall as default if we set it to be default after set any other before', () => {
      page.navigateTo();
      page.click('gayId');
      page.click('defaultRoomButton');
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall default');
      page.click('all-rooms');
      page.click('independenceId');
      expect(page.getTextFromField('roomTitle')).toEqual('Independence Hall');
      page.click('defaultRoomButton');
      expect(page.getTextFromField('roomTitle')).toEqual('Independence Hall default');
      page.click('all-rooms');
      page.click('gayId');
      expect(page.getTextFromField('roomTitle')).toEqual('Gay Hall');
    });
  });

  xdescribe('Validation of subscription of rooms', () => {

    it('should have a subscribe button when you select a specific room', () => {
      page.navigateTo();
      page.clickApartment();
      expect(page.elementExistsWithId('subscribeButton'));
    });

    it('should have a disabled subscribe button when you select green prairie hall', () => {
      page.navigateTo();
      page.click('green_prairieId');
      expect(page.button('subscribeButton').isEnabled()).toBeFalsy();
      expect(page.getTextFromField('subscribeButton')).toEqual('Subscribe notifications_none');
    });

    it('should have a enabled subscribe button when you select gay hall', () => {
      page.navigateTo();
      page.click('gayId');
      expect(page.button('subscribeButton').isEnabled()).toBeTruthy();
      expect(page.getTextFromField('subscribeButton')).toEqual('Subscribe notifications_none');
    });

    it('should have a active notification icon represent the subscribed room', () => {
      page.navigateTo();
      page.click('gayId');
      page.click('subscribeButton');
      page.field('emailField').clear();
      page.field('emailField').sendKeys('123@a.b');
      page.click('confirmAddSubButton');
      expect(page.button('subscribeButton').isEnabled()).toBe(false);
      expect(page.getTextFromField('subscribeButton')).toEqual('Subscribed notifications_active');
    });

    it('should have no changes if nothing saved in subscription dialog', () => {
      page.navigateTo();
      page.click('gayId');
      page.click('subscribeButton');
      page.field('emailField').clear();
      page.field('emailField').sendKeys('123@a.b');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
      expect(page.getTextFromField('subscribeButton')).toEqual('Subscribe notifications_none');
    });

    it('should have an enabled subscribe button when click gay hall', () => {
      page.navigateTo();
      page.click('gayId');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
    });

    it('should have an enabled subscribe button when click the apartments', () => {
      page.navigateTo();
      page.click('the_apartmentsId');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
    });

    it('should have an enabled subscribe button when click spooner hall', () => {
      page.navigateTo();
      page.click('spoonerId');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
    });

    it('should have an enabled subscribe button when click pine hall', () => {
      page.navigateTo();
      page.click('pineId');
      expect(page.button('subscribeButton').isEnabled()).toBe(true);
    });

    it('should have a disabled subscribe button when click independence hall', () => {
      page.navigateTo();
      page.click('independenceId');
      expect(page.button('subscribeButton').isEnabled()).toBe(false);
    });

    it('should have a disabled subscribe button when click green prairie hall', () => {
      page.navigateTo();
      page.click('green_prairieId');
      expect(page.button('subscribeButton').isEnabled()).toBe(false);
    });

    it('should have a disabled subscribe button when click blakely hall', () => {
      page.navigateTo();
      page.click('blakelyId');
      expect(page.button('subscribeButton').isEnabled()).toBe(false);
    });
  });

  xdescribe('Machine information dialog', () => {

    beforeEach(() => {
      page.navigateTo();
      page.click('gayId');
    });

    // afterEach(() => {
    //   page.click('closeDialog2');
    // });
    it('should have a none notification icon represent the in-used but unsubscribed machine', () => {
      expect(page.getTextFromField('machineSubIcon-dorky-gamboge-dog')).toEqual('notifications_none');
    });

    it('should have a more-vert icon represent the vacant machine', () => {
      expect(page.getTextFromField('machineSubIcon-bumpy-cerulean-molly')).toEqual('more_vert');
    });

    it('should have a active notification icon represent the in-used and subscribed machine', () => {
      page.click('dorky-gamboge-dog');
      page.field('emailField').clear();
      page.field('emailField').sendKeys('123@a.b');
      page.click('confirmAddSubButton');
      expect(page.getTextFromField('machineIsSubscribed')).toEqual('check Subscribed');
      page.click('closeDialog2');
      expect(page.getTextFromField('machineSubIcon-dorky-gamboge-dog')).toEqual('notifications_active');
    });

    it('should have the same icon if we do not save subscription in dialog', () => {
      page.click('dorky-gamboge-dog');
      page.field('emailField').clear();
      page.field('emailField').sendKeys('123@a.b');
      page.click('closeDialog2');
      expect(page.getTextFromField('machineSubIcon-dorky-gamboge-dog')).toEqual('notifications_none');
    });

    it('should open a dialog when clicked a machine in map', () => {
      page.click('dorky-gamboge-dog');
      expect(page.getTextFromField('dTitle')).toEqual('Machine Information');
    });

    it('should open a corresponding dialog shows detailed information of the machine be clicked', () => {
      page.click('dorky-gamboge-dog');
      expect(page.getTextFromField('dorky gamboge dog-dialog-info')).toContain('Dorky Gamboge Dog');
      expect(page.getTextFromField('dorky gamboge dog-dialog-info')).toContain('Gay Hall');
      expect(page.getTextFromField('dorky gamboge dog-dialog-info')).toContain('Dryer');
    });

    it('should not allow user to subscribe for a vacant machine', () => {
      page.click('bumpy-cerulean-molly');
      expect(page.getTextFromClassName('sub-title')).toContain('Cannot subscribe to this washer');
      expect(page.getTextFromClassName('sub-detail')).toContain('Subscription is only allowed to a running machine.');
    });

    it('should allow user to subscribe for an in-used machine', () => {
      page.click('dorky-gamboge-dog');
      expect(page.getTextFromClassName('sub-title')).toContain('Notify me when it is available');
      // tslint:disable-next-line:max-line-length
      expect(page.getTextFromClassName('sub-detail')).toContain('Subscribe to receive an email when the dryer is vacant. We will only send the notification once.');
    });

    describe('Subscribe machine (Validation)', () => {

      beforeEach(() => {
        page.navigateTo();
        page.click('gayId');
        page.click('dorky-gamboge-dog');
      });

      // afterEach(() => {
      //   page.click('exitWithoutAddingButton');
      // });

      it('Should show the validation error message about email being required', () => {
        expect(page.field('emailField').isPresent()).toBeTruthy('There should be an email field');
        page.field('emailField').clear();
        expect(page.button('confirmAddSubButton').isEnabled()).toBe(false);
        // clicking somewhere else will make the error appear
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
        // clicking somewhere else will make the error appear
        browser.actions().sendKeys(Key.TAB).perform();
        expect(page.getTextFromField('email-error')).toEqual('Email must be formatted properly');
      });
    });
  });

  xdescribe('Subscribe valid room', () => {

    beforeEach(() => {
      page.navigateTo();
      page.clickApartment();
      page.click('subscribeButton');
    });

    it('should open a dialog when click an enabled subscribe button in the apartment', () => {
      expect(page.elementExistsWithId('sub-title'));
    });

    it('should have correct title for the opened dialog when click an enabled subscribe button in the apartment', () => {
      expect(page.getTextWithID('sub-title')).toEqual('New Subscription');
    });

      /*
       * In this test, we want to test that we have the correct checked/default
       * value we pre-set based on the condition. We manually test the value to
       * be correct but we can not figure out how to do it in code, even with
       * discussion with Professor K.K., so we skipped this test.
       */
    xit('should have correct checked field for the opened dialog when click an enabled subscribe button in the apartment', async() => {
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
    xit('should have a disabled check box for washer in the apartment', () => {
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

    describe('Subscribe (Validation)', () => {

      afterEach(() => {
        page.click('exitWithoutAddingButton');
      });

      it('Should show the validation error message about email being required', () => {
        expect(page.field('emailField').isPresent()).toBeTruthy('There should be an email field');
        page.field('emailField').clear();
        expect(page.button('confirmAddSubButton').isEnabled()).toBe(false);
        // clicking somewhere else will make the error appear
        browser.actions().sendKeys(Key.TAB).perform();
        browser.actions().sendKeys(Key.TAB).perform();
        expect(page.getTextFromField('email-error')).toEqual('Email is required');
      });

      it('Should show the validation error message about email format', () => {
        expect(page.field('emailField').isPresent()).toBeTruthy('There should be an email field');
        page.field('emailField').clear();
        page.field('emailField').sendKeys('donjones.com');
        expect(page.button('confirmAddSubButton').isEnabled()).toBe(false);
        // clicking somewhere else will make the error appear
        browser.actions().sendKeys(Key.TAB).perform();
        expect(page.getTextFromField('email-error')).toEqual('Email must be formatted properly');
      });

    });
  });

});

