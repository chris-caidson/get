import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-follow-up-script',
  templateUrl: 'follow-up-script.html',
})
export class FollowUpScriptPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
