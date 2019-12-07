import {HomeComponent, SubscriptionDialog} from "./home.component";
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
* We tried to test the machine information dialog
* but the information dialog cannot read from
* the MAT_DIALOG_DATA_STUB correctly. Also,
* because there is no working example provided
* we skipped this dialog spec, which causes
* that the coverage is slightly lower than the
* user component spec.
*/
xdescribe('Machine info. Dialog', () => {
  it ('should generate custom links corresponding to the machine being reported', () => {});

  it ('should allow subscribe to an available machine', () => {});

  it ('should call home service to add new subscription correctly', () => {});
});
