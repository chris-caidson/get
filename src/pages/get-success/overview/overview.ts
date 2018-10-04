import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController, NavParams } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-overview",
  templateUrl: "overview.html",
})
export class OverviewPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private modalCtrl: ModalController,
    public auth: AuthProvider
  ) { }

  goForward() {
    this.navCtrl.setRoot("GetSuccessGetFitPage");
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Global Exec Team Website Overview",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fget-website-training.mp4?alt=media&token=6810ed06-aa50-4b1d-97f1-f53d7e3419c5"
    });

    myModal.present();
  }
}
