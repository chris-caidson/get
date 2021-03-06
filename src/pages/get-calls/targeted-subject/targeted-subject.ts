import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";
import * as firebase from "firebase"
import "firebase/firestore";

@IonicPage()
@Component({
  selector: "page-targeted-subject",
  templateUrl: "targeted-subject.html"
})
export class TargetedSubjectPage {
  public categories: any[] = [];
  public calls: any[] = [];
  public loaded: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public modalCtrl: ModalController
  ) {
    var self = this;

    firebase.firestore().collection("targeted-subject-categories").orderBy("order").get().then(categories => {
      categories.forEach(cat => {
        self.categories.push(cat.data());
      });

      firebase
      .firestore()
      .collection("targeted-subject-calls")
      .orderBy("order")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var d = doc.data();

          var obj = {
            id: doc.id,
            recorded: d.recorded,
            subject: d.subject,
            url: d.url,
            category: d.category,
            clicks: d.clicks ? d.clicks : 0
          };

          self.calls.push(obj);
          console.log(obj);
        });

        self.categories.forEach(c => {
          c.calls = self.calls.filter(call => call.category === c.category);
        });
      });

      self.loaded = true;
    });
  }

  openAudioModal(id, category, subject, url, clicks) {
    this.logClick(id, ++clicks);

    const myModal = this.modalCtrl.create("AudioModalPage", {
      category: category,
      subject: subject,
      recorded: null,
      url: url
    });
    myModal.present();
  }

  logClick(id, clicks) {
    firebase
      .firestore()
      .collection("targeted-subject-calls")
      .doc(id)
      .update({"clicks": +clicks})
  }
}
