import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-step-3',
  templateUrl: 'step-3.html',
})
export class Step_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }
}
