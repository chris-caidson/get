import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-get-started-get-focused',
  templateUrl: 'get-started-get-focused.html',
})
export class GetStartedGetFocusedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  openWeekdayCallsPage() {
    this.navCtrl.setRoot("WeekdayCallsPage")
  }
}
