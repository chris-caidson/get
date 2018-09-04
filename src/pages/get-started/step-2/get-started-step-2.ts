import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({ 
  selector: 'page-get-started-step-2',
  templateUrl: 'get-started-step-2.html',
})
export class GetStartedStep_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  openWeekdayCallsPage() {
    this.navCtrl.setRoot("WeekdayCallsPage")
  }
}
