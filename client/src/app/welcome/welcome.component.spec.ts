import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WelcomeComponent} from './welcome.component';
import {CustomModule} from '../custom.module';
import {HomeService} from '../home/home.service';
import {Room} from '../home/room';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

describe('Welcome page', () => {

  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  let homeServiceStub: {
    getRooms: () => Observable<Room[]>;
  };

  let cookieServiceStub: {
    getName: (arg0: String) => String;
    set: (arg0: String, arg1: String) => null;
  };

  let routeStub: {};

  let locationStub: {
    replaceState: (arg0: String) => null;
  };

  // @ts-ignore
  beforeEach(() => {

    homeServiceStub = {
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
    };

    cookieServiceStub = {
      // tslint:disable-next-line:no-shadowed-variable
      getName: (name) => 'gay',
      // tslint:disable-next-line:no-shadowed-variable
      set: (name, cookieID) => null,
    };

    routeStub = {};

    locationStub = {
      replaceState: (url) => null,
    };

    TestBed.configureTestingModule({
      imports: [CustomModule],
      declarations: [WelcomeComponent], // declare the test component
      providers: [
        {provide: HomeService, useValue: homeServiceStub},
        {provide: CookieService, useValue: cookieServiceStub},
        {provide: Router, useValue: routeStub},
        {provide: Location, useValue: locationStub}
      ]
    });

    fixture = TestBed.createComponent(WelcomeComponent);

    component = fixture.componentInstance; // BannerComponent test instance
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
});
