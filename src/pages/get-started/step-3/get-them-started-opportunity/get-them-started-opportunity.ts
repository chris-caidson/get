import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-get-them-started-opportunity',
  templateUrl: 'get-them-started-opportunity.html',
})
export class GetThemStartedOpportunityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
