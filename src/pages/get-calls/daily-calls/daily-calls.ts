import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";
import * as firebase from "firebase/app";
import "firebase/firestore";

@IonicPage()
@Component({
  selector: "page-daily-calls",
  templateUrl: "daily-calls.html"
})
export class DailyCallsPage {
  public items: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public modalCtrl: ModalController
  ) {
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
      });
  }

  openAudioModal(subject, recorded, url) {
    const myModal = this.modalCtrl.create("AudioModalPage", {
      subject: subject,
      recorded: recorded,
      url: url
    });
    myModal.present();
  }
}
