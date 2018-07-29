import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-cleanse-day-tracker',
  templateUrl: 'cleanse-day-tracker.html',
})
export class CleanseDayTrackerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
