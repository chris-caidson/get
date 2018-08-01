import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'nav-main',
  templateUrl: 'nav-main.html'
})
export class NavMainComponent {

  constructor(public navCtrl: NavController) {
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }
}
