import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-post-on-facebook',
  templateUrl: 'post-on-facebook.html',
})
export class PostOnFacebookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
