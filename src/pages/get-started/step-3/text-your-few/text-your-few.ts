import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-text-your-few',
  templateUrl: 'text-your-few.html',
})
export class TextYourFewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
