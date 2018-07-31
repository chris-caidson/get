import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'site-nav',
  templateUrl: 'site-nav.html'
})
export class SiteNavComponent {

  constructor(public navCtrl: NavController) {

  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }
}
