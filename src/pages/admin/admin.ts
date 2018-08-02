import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import * as firebase from "firebase/app";
import "firebase/firestore";

@IonicPage()
@Component({
  selector: "page-admin",
  templateUrl: "admin.html"
})
export class AdminPage {
  public categories: any[] = [];
  public targetedSubjectCalls: any[] = [];
  public dailyCalls: any[] = [];

  public categoriesLoaded: boolean = false;
  public targetedSubjectCallsLoaded: boolean = false;
  public dailyCallsLoaded: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var self = this;

    firebase
      .firestore()
      .collection("targeted-subject-categories")
      .orderBy("order")
      .get()
      .then(categories => {
        categories.forEach(cat => {
          self.categories.push(cat.data());
        });

        self.categoriesLoaded = true;
      });

    firebase
      .firestore()
      .collection("targeted-subject-calls")
      .orderBy("order")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          self.targetedSubjectCalls.push(doc.data());
        });

        self.targetedSubjectCallsLoaded = true;
      });

      firebase
      .firestore()
      .collection("daily-calls")
      .orderBy("recorded", "desc")
      .limit(60)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          self.dailyCalls.push(doc.data());
        });

        self.dailyCallsLoaded = true;
      });
  }
}
