import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'nav-get-calls',
  templateUrl: 'nav-get-calls.html'
})
export class NavGetCallsComponent {

  constructor(public navCtrl: NavController) {
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }

}
