import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from "../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: "page-get-success-get-focused",
  templateUrl: "get-success-get-focused.html",
})
export class GetSuccessGetFocusedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth: AuthProvider, public modalCtrl: ModalController, public pdfProvider: PdfProvider) {
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }

  openHomePage() {
    this.navCtrl.setRoot("HomePage");
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Overcoming Objections",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fovercoming-objections.mp4?alt=media&token=bdeeed68-ff46-41eb-bc1c-5ea7dc3dd476"
    });
    myModal.present();
  }

  goBack() {
    this.navCtrl.setRoot("GetSuccessGetFitPage");
  }

  goForward() {
    this.navCtrl.setRoot("GetSuccessGetFreePage");
  }
}
