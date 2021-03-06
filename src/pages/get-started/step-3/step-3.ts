import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController, NavParams } from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from "../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: "page-step-3",
  templateUrl: "step-3.html",
})
export class Step3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,
    public auth: AuthProvider, public pdfProvider: PdfProvider) {
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }

  openHomePage() {
    this.navCtrl.setRoot("HomePage");
  }

  goBack() {
    this.navCtrl.setRoot("Step2Page");
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "You Share, They Share, Repeat",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fyou-share-they-share-repeat.mp4?alt=media&token=6ddcadda-4da2-4512-a97b-bcb0f5bc1119"
    });
    myModal.present();
  }
}
