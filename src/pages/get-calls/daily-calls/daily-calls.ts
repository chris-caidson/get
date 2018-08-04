import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";
import * as firebase from "firebase"
import "firebase/firestore";

@IonicPage()
@Component({
  selector: "page-daily-calls",
  templateUrl: "daily-calls.html"
})
export class DailyCallsPage {
  public items: any[] = [];
  public loaded: boolean = false;

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

        self.loaded = true;
      });
  }

  openAudioModal(subject, recorded, url) {
    const myModal = this.modalCtrl.create("AudioModalPage", {
      category: null,
      subject: subject,
      recorded: recorded,
      url: url
    });
    myModal.present();
  }
}
