import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome-text',
  templateUrl: 'welcome-text.html',
})
export class WelcomeTextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
