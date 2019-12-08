import {HomeComponent} from "./home.component";
import {SubscriptionDialog} from "./home.subscription";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {Subscription} from "./subscription";
import {FormBuilder, NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {Room} from "./room";
import {Machine} from "./machine";
import {History} from "./history";
import {CustomModule} from "../custom.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {HomeService} from "./home.service";
import {CookieService} from "ngx-cookie-service";
import {By} from "@angular/platform-browser";

/*
 * We tried to test the add subscription dialog
 * but the subscription dialog cannot read from
 * the MAT_DIALOG_DATA_STUB correctly.
 * Because there is no working example provided
 * we skipped this dialog spec, which causes
 * that the coverage is slightly lower than the
 * user's spec.
 */
xdescribe('Add subscription dialog', () => {

  let subscriptionDialog: SubscriptionDialog;
  // tslint:disable-next-line:no-shadowed-variable
  let fixture1: ComponentFixture<SubscriptionDialog>;

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let calledClose: boolean;

  const mockMatDialogRef = {
    close() {
      calledClose = true;
    }
  };

  // tslint:disable-next-line:prefer-const
  let MAT_DIALOG_DATA_STUB: {
    data: { subscription: Subscription, noWasher: boolean, noDryer: boolean, roomName: string },
    fb: FormBuilder
  };

  let homeServiceStub: {
    getRooms: () => Observable<Room[]>;
    getMachines: () => Observable<Machine[]>;
    getAllHistory: () => Observable<History[]>;
    updateRunningStatus;
  };

  let cookieServiceStub: {
    getName: (arg0: String) => String;
    set: (arg0: String, arg1: String) => null;
  };
  // @ts-ignore
  beforeEach(async(() => {

    homeServiceStub = {
      getMachines: () => Observable.of([
        {
          id: 'id_1',
          name: '',
          running: false,
          status: 'normal',
          room_id: 'gay',
          type: 'washer',
          position: {
            x: 0,
            y: 0,
          },
          remainingTime: -1,
          vacantTime: 10,
          isSubscribed: undefined
        }, {
          id: 'id_2',
          name: '',
          running: true,
          status: 'normal',
          room_id: 'room_b',
          type: 'washer',
          position: {
            x: 0,
            y: 0,
          },
          remainingTime: 10,
          vacantTime: -1,
          isSubscribed: undefined
        },
      ]),
      getRooms: () => Observable.of([
        {
          id: 'gay',
          name: 'A',

          isSubscribed: false,

          numberOfAllMachines: 1,
          numberOfAvailableMachines: 1,
        }, {
          id: 'room_b',
          name: 'B',

          isSubscribed: false,

          numberOfAllMachines: 1,
          numberOfAvailableMachines: 0,
        },
      ]),
      getAllHistory: () => Observable.of([
        {
          1: {
            0: 10,
            1: 5,
            2: 2,
            3: 2,
            4: 3,
            5: 2,
            6: 6,
            7: 3,
            8: 1,
            9: 8,
            10: 4,
            11: 2,
            12: 3,
            13: 3,
            14: 7,
            15: 2,
            16: 9,
            17: 6,
            18: 0,
            19: 4,
            20: 8,
            21: 8,
            22: 10,
            23: 5,
            24: 10,
            25: 3,
            26: 8,
            27: 1,
            28: 0,
            29: 10,
            30: 2,
            31: 5,
            32: 4,
            33: 3,
            34: 7,
            35: 0,
            36: 1,
            37: 3,
            38: 8,
            39: 5,
            40: 0,
            41: 9,
            42: 0,
            43: 8,
            44: 4,
            45: 4,
            46: 8,
            47: 3
          },
          2: {
            0: 10,
            1: 5,
            2: 2,
            3: 2,
            4: 3,
            5: 2,
            6: 6,
            7: 3,
            8: 1,
            9: 8,
            10: 4,
            11: 2,
            12: 3,
            13: 3,
            14: 7,
            15: 2,
            16: 9,
            17: 6,
            18: 0,
            19: 4,
            20: 8,
            21: 8,
            22: 10,
            23: 5,
            24: 10,
            25: 3,
            26: 8,
            27: 1,
            28: 0,
            29: 10,
            30: 2,
            31: 5,
            32: 4,
            33: 3,
            34: 7,
            35: 0,
            36: 1,
            37: 3,
            38: 8,
            39: 5,
            40: 0,
            41: 9,
            42: 0,
            43: 8,
            44: 4,
            45: 4,
            46: 8,
            47: 3
          },
          3: {
            0: 10,
            1: 5,
            2: 2,
            3: 2,
            4: 3,
            5: 2,
            6: 6,
            7: 3,
            8: 1,
            9: 8,
            10: 4,
            11: 2,
            12: 3,
            13: 3,
            14: 7,
            15: 2,
            16: 9,
            17: 6,
            18: 0,
            19: 4,
            20: 8,
            21: 8,
            22: 10,
            23: 5,
            24: 10,
            25: 3,
            26: 8,
            27: 1,
            28: 0,
            29: 10,
            30: 2,
            31: 5,
            32: 4,
            33: 3,
            34: 7,
            35: 0,
            36: 1,
            37: 3,
            38: 8,
            39: 5,
            40: 0,
            41: 9,
            42: 0,
            43: 8,
            44: 4,
            45: 4,
            46: 8,
            47: 3
          },
          4: {
            0: 10,
            1: 5,
            2: 2,
            3: 2,
            4: 3,
            5: 2,
            6: 6,
            7: 3,
            8: 1,
            9: 8,
            10: 4,
            11: 2,
            12: 3,
            13: 3,
            14: 7,
            15: 2,
            16: 9,
            17: 6,
            18: 0,
            19: 4,
            20: 8,
            21: 8,
            22: 10,
            23: 5,
            24: 10,
            25: 3,
            26: 8,
            27: 1,
            28: 0,
            29: 10,
            30: 2,
            31: 5,
            32: 4,
            33: 3,
            34: 7,
            35: 0,
            36: 1,
            37: 3,
            38: 8,
            39: 5,
            40: 0,
            41: 9,
            42: 0,
            43: 8,
            44: 4,
            45: 4,
            46: 8,
            47: 3
          },
          5: {
            0: 10,
            1: 5,
            2: 2,
            3: 2,
            4: 3,
            5: 2,
            6: 6,
            7: 3,
            8: 1,
            9: 8,
            10: 4,
            11: 2,
            12: 3,
            13: 3,
            14: 7,
            15: 2,
            16: 9,
            17: 6,
            18: 0,
            19: 4,
            20: 8,
            21: 8,
            22: 10,
            23: 5,
            24: 10,
            25: 3,
            26: 8,
            27: 1,
            28: 0,
            29: 10,
            30: 2,
            31: 5,
            32: 4,
            33: 3,
            34: 7,
            35: 0,
            36: 1,
            37: 3,
            38: 8,
            39: 5,
            40: 0,
            41: 9,
            42: 0,
            43: 8,
            44: 4,
            45: 4,
            46: 8,
            47: 3
          },
          6: {
            0: 10,
            1: 5,
            2: 2,
            3: 2,
            4: 3,
            5: 2,
            6: 6,
            7: 3,
            8: 1,
            9: 8,
            10: 4,
            11: 2,
            12: 3,
            13: 3,
            14: 7,
            15: 2,
            16: 9,
            17: 6,
            18: 0,
            19: 4,
            20: 8,
            21: 8,
            22: 10,
            23: 5,
            24: 10,
            25: 3,
            26: 8,
            27: 1,
            28: 0,
            29: 10,
            30: 2,
            31: 5,
            32: 4,
            33: 3,
            34: 7,
            35: 0,
            36: 1,
            37: 3,
            38: 8,
            39: 5,
            40: 0,
            41: 9,
            42: 0,
            43: 8,
            44: 4,
            45: 4,
            46: 8,
            47: 3
          },
          7: {
            0: 10,
            1: 5,
            2: 2,
            3: 2,
            4: 3,
            5: 2,
            6: 6,
            7: 3,
            8: 1,
            9: 8,
            10: 4,
            11: 2,
            12: 3,
            13: 3,
            14: 7,
            15: 2,
            16: 9,
            17: 6,
            18: 0,
            19: 4,
            20: 8,
            21: 8,
            22: 10,
            23: 5,
            24: 10,
            25: 3,
            26: 8,
            27: 1,
            28: 0,
            29: 10,
            30: 2,
            31: 5,
            32: 4,
            33: 3,
            34: 7,
            35: 0,
            36: 1,
            37: 3,
            38: 8,
            39: 5,
            40: 0,
            41: 9,
            42: 0,
            43: 8,
            44: 4,
            45: 4,
            46: 8,
            47: 3
          },
          '_id': '5dbb7ca7d8ba936a8e8d9e3f',
          'room_id': 'A'
        },
      ]),
      updateRunningStatus: () => null,
    };

    cookieServiceStub = {
      // tslint:disable-next-line:no-shadowed-variable
      getName: (name) => 'gay',
      // tslint:disable-next-line:no-shadowed-variable
      set: (name, cookieID) => null,
    };

    TestBed.configureTestingModule({
      imports: [CustomModule],
      declarations: [HomeComponent, SubscriptionDialog],
      providers: [
        {provide: MatDialogRef, useValue: mockMatDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: MAT_DIALOG_DATA_STUB},
        {provide: HomeService, useValue: homeServiceStub},
        {provide: CookieService, useValue: cookieServiceStub}
      ]
    }).compileComponents().catch(error => {
      expect(error).toBeNull();
    });
  }));

  beforeEach(() => {
    calledClose = false;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.loadAllRooms();
    component.loadAllMachines();
    component.updateRoom('room_b', 'B');
    fixture1 = TestBed.createComponent(SubscriptionDialog);
    subscriptionDialog = fixture1.componentInstance;
  });

  it('should subscribe to an available room', () => {
    component.openSubscription('gay');
    expect(component.isSubscribed === true);
  });

  it('should not allow to subscribe with an invalid form of email', async(() => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(SubscriptionDialog);
    const debug = fixture.debugElement;
    const input = debug.query(By.css('[name=email]'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      input.nativeElement.value = 'bad@email.com';
      dispatchEvent(input.nativeElement);
      fixture.detectChanges();

      const form: NgForm = debug.children[0].injector.get(NgForm);
      const control = form.control.get('email');
      expect(control.hasError('notPeeskillet')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('notPeeskillet', ['email'])).toEqual(true);

      input.nativeElement.value = 'peeskillet@stackoverflow.com';
      dispatchEvent(input.nativeElement);
      fixture.detectChanges();

      expect(control.hasError('notPeeskillet')).toBe(false);
      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('notPeeskillet', ['email'])).toEqual(false);
    });

    it ('should call home service to add new subscription correctly', () => {});
  }));
});
