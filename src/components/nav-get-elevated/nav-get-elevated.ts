import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'nav-get-elevated',
  templateUrl: 'nav-get-elevated.html'
})
export class NavGetElevatedComponent {

  constructor(public navCtrl: NavController) {
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }

}
