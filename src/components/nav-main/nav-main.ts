import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'nav-main',
  templateUrl: 'nav-main.html'
})
export class NavMainComponent {
  @Input() selectedSection: string = "Home";
  @Input() selectedMenuItem: string = "Home";

  constructor(public navCtrl: NavController) {
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }
}
