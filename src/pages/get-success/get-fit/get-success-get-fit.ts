import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-get-success-get-fit",
  templateUrl: "get-success-get-fit.html"
})
export class GetSuccessGetFitPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    public modalCtrl: ModalController,
    public auth: AuthProvider
  ) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "peta":
        data = {
          name: "Establish Your Why",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Festablish-your-why.mp4?alt=media&token=d6cb2aed-bf84-4cd5-8469-daa708c0d631"
        };
        break;

      case "jess":
        data = {
          name: "Setting Yourself Up for Success with Jessica Johnston",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fjessica-johnston.mp4?alt=media&token=985fb81b-3cca-49fa-a033-307f6b25e822"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }

  goBack() {
    this.navCtrl.setRoot("OverviewPage");
  }

  goForward() {
    this.navCtrl.setRoot("GetSuccessGetFocusedPage");
  }
}
