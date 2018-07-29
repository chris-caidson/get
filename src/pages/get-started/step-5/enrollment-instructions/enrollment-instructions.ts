import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-enrollment-instructions',
  templateUrl: 'enrollment-instructions.html',
})
export class EnrollmentInstructionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
