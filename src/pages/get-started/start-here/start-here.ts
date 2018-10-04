import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController, NavParams } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-start-here",
  templateUrl: "start-here.html",
})
export class StartHerePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private modalCtrl: ModalController,
    public auth: AuthProvider
  ) { }

  goForward() {
    this.navCtrl.setRoot("Step1Page");
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Start Here",
      url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fstart-here.mp4?alt=media&token=da3f930d-5ff4-4a47-bb95-33f2699ede3e"
    });

    myModal.present();
  }
}
