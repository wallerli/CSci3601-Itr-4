import {Component, Inject} from "@angular/core";
import {HomeService} from "./home.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Machine} from "./machine";
import {Subscription} from "./subscription";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'home.dialog',
  templateUrl: 'home.dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class HomeDialog {

  constructor(
    public homeService: HomeService,
    public dialogRef: MatDialogRef<HomeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { machine: Machine, newMachineSub: Subscription },
    private fb: FormBuilder) {

    this.ngOnInit();
  }

  addSubForm: FormGroup;

  add_sub_validation_messages = {
    'email': [
      {type: 'required', message: 'Email is required'},
      {type: 'email', message: 'Email must be formatted properly'},
    ]
  };

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewSubscription() {
    if (this.data.newMachineSub != null) {
      this.data.machine.isSubscribed = true;
      this.homeService.addNewSubscription(this.data.newMachineSub).subscribe(
        () => {
          // this.machines.filter(m => m.id === this.data.machine.id)[0].isSubscribed = true;
          // this.updateRoom(this.roomId, this.roomName);
        },
        err => {
          // This should probably be turned into some sort of meaningful response.
          console.log('There was an error adding the subscription.');
          console.log('The newSub or dialogResult was ' + this.data.newMachineSub);
          console.log('The error was ' + JSON.stringify(err));
        }
      );
    }
    this.ngOnInit();
  }

  generateCustomLink(machineRoomID: string, machineType: string, machineID: string): string {
    if (machineRoomID === 'The Apartments') {
      // tslint:disable-next-line:max-line-length
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Apartment Community Building (Cube)&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with ' + machineType + ' ' + machineID + ': ';
    } else if (machineRoomID === 'Gay Hall') {
      // tslint:disable-next-line:max-line-length
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Clayton A. Gay&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with ' + machineType + ' ' + machineID + ': ';
    } else if (machineRoomID === 'Green Prairie Hall') {
      // tslint:disable-next-line:max-line-length
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Green Prairie Community&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with ' + machineType + ' ' + machineID + ': ';
    } else if (machineRoomID === 'Pine Hall') {
      // tslint:disable-next-line:max-line-length
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Pine&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with ' + machineType + ' ' + machineID + ': ';
    } else if (machineRoomID === 'Independence Hall') {
      // tslint:disable-next-line:max-line-length
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=David C. Johnson Independence&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with ' + machineType + ' ' + machineID + ': ';
    } else if (machineRoomID === 'Spooner Hall') {
      // tslint:disable-next-line:max-line-length
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Spooner&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with ' + machineType + ' ' + machineID + ': ';
    } else if (machineRoomID === 'Blakely Hall') {
      // tslint:disable-next-line:max-line-length
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000002=Blakely&entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with ' + machineType + ' ' + machineID + ': ';
    } else {
      // tslint:disable-next-line:max-line-length
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdU04E9Kt5LVv6fVSzgcNQj1YzWtWu8bXGtn7jhEQIsqMyqIg/viewform?entry.1000005=Laundry room&entry.1000010=Resident&entry.1000006=Other&entry.1000007=issue with ' + machineType + ' ' + machineID + ': ';
    }
  }

  createForms() {
    // add user form validations
    this.addSubForm = this.fb.group({
      // We don't need a special validator just for our app here, but there is a default one for email.
      email: new FormControl('email', Validators.compose([
        Validators.required,
        Validators.email
      ])),

    });

    // console.log(this.addSubForm);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.createForms();
  }
}
