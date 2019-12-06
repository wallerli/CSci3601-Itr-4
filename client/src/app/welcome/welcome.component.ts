import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home/home.service';
import {Room} from '../home/room';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'welcome.component.html',
  // styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  public rooms: Room[];

  constructor(public homeService: HomeService, private cookieService: CookieService, private router: Router, private location: Location) {}

  loadAllRooms(): void {
    const rooms: Observable<Room[]> = this.homeService.getRooms();
    rooms.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      rooms => {
        this.rooms = rooms;
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    (async () => {
      this.loadAllRooms();
      if (this.router.url !== '/welcome' && this.cookieService.get('room_name') !== ''
        && this.cookieService.get('room_name') !== 'All Rooms') {
        await this.router.navigateByUrl('/home');
      } else {
        this.location.replaceState('/welcome');
      }
    }) ();
  }

  async navigateTo(id: string) {
    await this.router.navigateByUrl('/home/' + id);
  }
}
