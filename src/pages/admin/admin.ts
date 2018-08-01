import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase/app";
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   

  }
}
