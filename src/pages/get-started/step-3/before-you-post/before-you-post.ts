import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-before-you-post',
  templateUrl: 'before-you-post.html',
})
export class BeforeYouPostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
