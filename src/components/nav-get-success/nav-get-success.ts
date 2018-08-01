import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'nav-get-success',
  templateUrl: 'nav-get-success.html'
})
export class NavGetSuccessComponent {

  constructor(public navCtrl: NavController) {
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }

}
