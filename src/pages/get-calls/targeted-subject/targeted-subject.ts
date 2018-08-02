import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";
import * as firebase from "firebase/app";
import "firebase/firestore";

@IonicPage()
@Component({
  selector: "page-targeted-subject",
  templateUrl: "targeted-subject.html"
})
export class TargetedSubjectPage {
  public healthItems: any[] = [];
  public understandingTheIndustryItems: any[] = [];
  public connectingItems: any[] = [];
  public performanceAthletesItems: any[] = [];
  public compensationItems: any[] = [];
  public personalDevelopmentItems: any[] = [];
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
      .collection("targeted-subject-calls")
      .orderBy("order")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          switch (doc.data().category) {
            case "Health":
              self.healthItems.push(doc.data());
              break;

            case "Understanding the Industry":
              self.understandingTheIndustryItems.push(doc.data());
              break;

            case "Connecting":
              self.connectingItems.push(doc.data());
              break;

            case "Performance Athletes":
              self.performanceAthletesItems.push(doc.data());
              break;

            case "Compensation":
              self.compensationItems.push(doc.data());
              break;

            case "Personal Development":
              self.personalDevelopmentItems.push(doc.data());
              break;
          }
        });

        self.loaded = true;
      });
  }

  openAudioModal(category, subject, url) {
    const myModal = this.modalCtrl.create("AudioModalPage", {
      category: category,
      subject: subject,
      recorded: null,
      url: url
    });
    myModal.present();
  }
}
