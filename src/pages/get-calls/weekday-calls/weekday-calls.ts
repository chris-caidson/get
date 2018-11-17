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
  selector: "page-weekday-calls",
  templateUrl: "weekday-calls.html"
})
export class WeekdayCallsPage {
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
          var d = doc.data();

          var obj = {
            id: doc.id,
            recorded: d.recorded,
            subject: d.subject,
            url: d.url,
            clicks: d.clicks ? d.clicks : 0
          };

          self.items.push(obj);
        });

        self.loaded = true;
      });
  }

  openAudioModal(id, subject, recorded, url, clicks) {
    this.logClick(id, ++clicks);

    const myModal = this.modalCtrl.create("AudioModalPage", {
      category: null,
      subject: subject,
      recorded: recorded,
      url: url
    });
    myModal.present();
  }

  logClick(id, clicks) {
    firebase
      .firestore()
      .collection("daily-calls")
      .doc(id)
      .update({"clicks": +clicks})
  }
}
