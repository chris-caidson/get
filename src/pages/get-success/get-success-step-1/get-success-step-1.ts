import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-get-success-step-1',
  templateUrl: 'get-success-step-1.html',
})
export class GetSuccessStep_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

}
