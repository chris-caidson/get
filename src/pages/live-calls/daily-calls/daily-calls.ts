import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-daily-calls',
  templateUrl: 'daily-calls.html',
})
export class DailyCallsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

}
