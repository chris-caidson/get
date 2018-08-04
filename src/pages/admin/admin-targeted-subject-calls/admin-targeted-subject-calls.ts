import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from "firebase/app";
import "firebase/firestore";

@IonicPage()
@Component({
  selector: 'page-admin-targeted-subject-calls',
  templateUrl: 'admin-targeted-subject-calls.html',
})
export class AdminTargetedSubjectCallsPage {
  public items: any[] = [];
  public loaded: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    var self = this;

    firebase
      .firestore()
      .collection("targeted-subject-calls")
      .orderBy("order")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          self.items.push(doc.data());
        });

        self.loaded = true;
      });
  }

}
