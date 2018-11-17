import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from "../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: "page-get-success-get-free",
  templateUrl: "get-success-get-free.html"
})
export class GetSuccessGetFreePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public pdfProvider: PdfProvider,
    public modalCtrl: ModalController
  ) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "kathy-coover": data = {
        name: "Fast Track to Executive with Kathy Coover",
        url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ffast-track-to-executive-2018.mp4?alt=media&token=af710ad5-2c1f-4a71-8a7d-f4bd1f25b1d9"
      };
      break;

      case "jim-coover":
      data = {
        name: "The Isagenix Compensation Plan with Jim Coover",
        url:
          "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fjim-coover-comp-plan.mp4?alt=media&token=2772764b-1fd7-4e97-881f-f7f6331c4663"
      };
      break;

      case "erin-and-adrienne":
      data = {
        name: "Isagenix Compensation Plan",
        url:
          "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ferin-adrienne-comp-plan.mp4?alt=media&token=79a6bd74-b245-4a41-a744-f843ee23e25f"
      };

      break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }

  goBack() {
    this.navCtrl.setRoot("GetSuccessGetFocusedPage");
  }
}
