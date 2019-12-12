import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Subscription} from './subscription';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home.subscription',
  templateUrl: 'home.subscription.html',
})
// tslint:disable-next-line:component-class-suffix
export class SubscriptionDialog {

  options: FormGroup;
  addSubForm: FormGroup;
  name: string;
  outOfWashers: boolean;
  outOfDryers: boolean;

  constructor(
    public dialogRef: MatDialogRef<SubscriptionDialog>,
    // tslint:disable-next-line:max-line-length
    @Inject(MAT_DIALOG_DATA) public data: { subscription: Subscription, noWasher: boolean, noDryer: boolean, roomName: string }, private fb: FormBuilder) {

    this.outOfWashers = data.noWasher;
    this.outOfDryers = data.noDryer;
    this.name = data.roomName;

    if (this.outOfWashers) {
      data.subscription.type = 'washer';
    } else {
      data.subscription.type = 'dryer';
    }

    this.options = fb.group({
      type: data.subscription.type,
    });

    this.ngOnInit();
  }

  add_sub_validation_messages = {
    'email': [
      {type: 'required', message: 'Email is required'},
      {type: 'email', message: 'Email must be formatted properly'},
    ]
  };

  createForms() {
    this.addSubForm = this.fb.group({
      // We don't need a special validator just for our app here, but there is a default one for email.
      email: new FormControl('email', Validators.compose([
        Validators.required,
        Validators.email
      ])),

    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.createForms();
  }
}
