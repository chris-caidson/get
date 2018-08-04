import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from "firebase/app";
import "firebase/firestore";

@IonicPage()
@Component({
  selector: 'page-admin-daily-calls',
  templateUrl: 'admin-daily-calls.html',
})
export class AdminDailyCallsPage {
  public items: any[] = [];
  public loaded: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    var self = this;

      firebase
      .firestore()
      .collection("daily-calls")
      .orderBy("recorded", "desc")
      .limit(60)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          self.items.push(doc.data());
        });

        self.loaded = true;
      });
  }
}
