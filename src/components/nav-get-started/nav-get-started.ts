import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'nav-get-started',
  templateUrl: 'nav-get-started.html'
})
export class NavGetStartedComponent {

  constructor(public navCtrl: NavController) {
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }

}
