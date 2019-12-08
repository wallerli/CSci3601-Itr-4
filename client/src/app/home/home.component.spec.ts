import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CustomModule} from '../custom.module';
import {HomeService} from './home.service';
import {Machine} from './machine';
import {Room} from './room';
import {History} from './history';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

describe('Home page', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let df: DebugElement;
  let dg: DebugElement;
  let di: DebugElement;
  let dj: DebugElement;
  let el: HTMLElement;
  let fl: HTMLElement;
  let gl: HTMLElement;
  let il: HTMLElement;
  let jl: HTMLElement;

  let name: String;
  let cookieID: String;

  let homeServiceStub: {
    getRooms: () => Observable<Room[]>;
    getMachines: () => Observable<Machine[]>;
    getAllHistory: () => Observable<History[]>;
    updateRunningStatus;
    // addNewSubscription: (newSub: Subscription) => Observable<string>;
  };

  let cookieServiceStub: {
    getName: (arg0: String) => String;
    set: (arg0: String, arg1: String) => null;
  };

  let activatedRouteStub: {};

  let locationStub: {
    replaceState: (arg0: String) => null;
  };

  // @ts-ignore
  beforeEach(() => {

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
          type: 'dryer',
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

    activatedRouteStub = {};

    locationStub = {
      replaceState: (url) => null,
    };

    TestBed.configureTestingModule({
      imports: [CustomModule],
      declarations: [HomeComponent], // declare the test component
      providers: [
        {provide: HomeService, useValue: homeServiceStub},
        {provide: CookieService, useValue: cookieServiceStub},
        {provide: ActivatedRoute, useValue: activatedRouteStub},
        {provide: Location, useValue: locationStub}
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);

    component = fixture.componentInstance; // BannerComponent test instance

    // query for the link (<a> tag) by CSS element selector
    de = fixture.debugElement.query(By.css('#home-rooms-card'));
    df = fixture.debugElement.query(By.css('#predictionGraphTitle'));
    dg = fixture.debugElement.query(By.css('#roomMap'));
    di = fixture.debugElement.query(By.css('#washer-grid'));
    dj = fixture.debugElement.query(By.css('#dryer-grid'));
    el = de.nativeElement;
    fl = df.nativeElement;
    gl = dg.nativeElement;
    il = di.nativeElement;
    jl = dj.nativeElement;

    name = 'room_id';
    cookieID = 'gay';
  });

  it('displays a text of rooms', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('Select a Laundry Room to View');
  });

  it('displays a text of busy time\'s title', () => {
    fixture.detectChanges();
    expect(fl.textContent).toContain('Busy Time on ');
  });

  it('displays a text of the room\'s map', () => {
    fixture.detectChanges();
    expect(gl.textContent).toContain('Laundry Room Map');
  });

  it('displays a text of broken machines', () => {
    fixture.detectChanges();
    expect(il.textContent).toContain('Washers Within All rooms');
  });

  it('displays a text of broken machines', () => {
    fixture.detectChanges();
    expect(jl.textContent).toContain('Dryers Within All rooms');
  });

  it('load all the machines', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });
    expect(component.machines.length).toBe(2);
  });

  it('load all the rooms', () => {
    const rooms: Observable<Room[]> = homeServiceStub.getRooms();
    rooms.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      rooms => {
        component.rooms = rooms;
      });
    expect(component.rooms.length).toBe(2);
  });

  it('should load and update the time remaining', () => {
    let spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component, 'updateTime');
    component.updateTime();
    expect(spy).toHaveBeenCalled();
  });

  it('should the machine counters', () => {
    expect(component.numOfVacant).toBe(undefined);
    expect(component.numOfAll).toBe(undefined);
    component.updateCounter();
    expect(component.numOfVacant).toBe(0);
    expect(component.numOfAll).toBe(0);
    const rooms: Observable<Room[]> = homeServiceStub.getRooms();
    rooms.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      rooms => {
        component.rooms = rooms;
      });
    component.updateCounter();
    expect(component.numOfVacant).toBe(1);
    expect(component.numOfAll).toBe(2);
  });

  it('should return the corresponding room from its id', () => {
    component.loadAllRooms();
    expect(component.translateRoomId('gay')).toBe('A');
  });

  it('should translate the name of a machine name', () => {
    expect(component.translateMachineName('dorky-gamboge-dog')).toBe('dorky gamboge dog');
  });

  it('should generate a custom link corresponding to the machine being reported', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });
    expect(component.generateCustomLink('the_apartments', 'dryer', 'the_id'))
    // tslint:disable-next-line:max-line-length
      .toBe('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Apartment Community Building (Cube)&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with dryer the_id: ');
  });

  it('should generate a custom link corresponding to the machine being reported', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });
    expect(component.generateCustomLink('gay', 'dryer', 'the_id'))
    // tslint:disable-next-line:max-line-length
      .toBe('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Clayton A. Gay&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with dryer the_id: ');
  });

  it('should generate a custom link corresponding to the machine being reported', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });

    // tslint:disable-next-line:max-line-length
    expect(component.generateCustomLink('green_prairie', 'dryer', 'the_id'))
    // tslint:disable-next-line:max-line-length
      .toBe('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Green Prairie Community&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with dryer the_id: ');
  });

  it('should generate a custom link corresponding to the machine being reported', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });
    expect(component.generateCustomLink('pine', 'dryer', 'the_id'))
    // tslint:disable-next-line:max-line-length
      .toBe('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Pine&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with dryer the_id: ');
  });

  it('should generate a custom link corresponding to the machine being reported', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });
    expect(component.generateCustomLink('independence', 'dryer', 'the_id'))
    // tslint:disable-next-line:max-line-length
      .toBe('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=David C. Johnson Independence&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with dryer the_id: ');
  });

  it('should generate a custom link corresponding to the machine being reported', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });
    // tslint:disable-next-line:max-line-length
    expect(component.generateCustomLink('spooner', 'dryer', 'the_id'))
    // tslint:disable-next-line:max-line-length
      .toBe('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Spooner&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with dryer the_id: ');
  });

  it('should generate a custom link corresponding to the machine being reported', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });
    expect(component.generateCustomLink('blakely', 'dryer', 'the_id'))
    // tslint:disable-next-line:max-line-length
      .toBe('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Blakely&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with dryer the_id: ');
  });

  it('should generate a custom link corresponding to the machine being reported', () => {
    const machines: Observable<Machine[]> = homeServiceStub.getMachines();
    machines.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      machines => {
        component.machines = machines;
      });
    expect(component.generateCustomLink('test', 'dryer', 'the_id'))
    // tslint:disable-next-line:max-line-length
      .toBe('https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with dryer the_id: ');
  });


  it('should return the number of grid columns given different a window length', () => {
    if (window.innerWidth >= 1200) {
      expect(component.getGridCols()).toEqual(Math.min((window.innerWidth / 800), 2));
    } else {
      expect(component.getGridCols()).toEqual(Math.min((window.innerWidth / 400), 3));
    }
  });

  it('should return the number of graph columns given different a window length', () => {
    expect(component.getGraphCols()).toEqual(Math.min(window.innerWidth / 680, 2));
  });

  it('should return the chart day based on today\'s day', () => {
    const current = component.inputDay;
    component.updateDayByButton(1);
    let expected = (current + 1) % 7;
    if (expected === 0) {
      expected = 7;
    }
    expect(component.inputDay).toBe(expected);
    for (let i = 0; i < 7; ++i) {
      component.updateDayByButton(-1);
    }
    expect(component.inputDay).toBe(expected);
  });

  it('should return the chart day based on the day selector', () => {
    component.updateDayBySelector(4);
    expect(component.inputDay).toBe(4);
  });

  it('should return the chart day based on the room selector', () => {
    component.loadAllHistory();
    expect(component.getWeekDayByRoom('A', 2)[0]).toEqual(10);
  });

  it('should update machines of selected room', () => {
    component.loadAllRooms();
    component.loadAllMachines();
    component.updateRoom('gay', 'A');
    expect(component.filteredMachines.length).toEqual(1);
    component.updateRoom('', 'any');
    expect(component.filteredMachines.length).toEqual(2);
  });

  it('should modify array', () => {
    component.loadAllRooms();
    component.loadAllMachines();
    component.updateRoom('gay', 'A');
    component.buildChart();
    component.modifyArray([], 2);
    expect(component.filteredMachines.length).toEqual(1);
  });

  // Cookie Service :(
  it('should set a cookie', () => {
    component.roomId = 'gay';
    homeServiceStub.updateRunningStatus();
    component.updateCookies(component.roomId, component.roomName);
    expect(component.roomId).toBe(cookieServiceStub.getName('room_id'));
  });
});
