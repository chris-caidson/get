import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from '../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: "page-get-success-step-3",
  templateUrl: "get-success-step-3.html"
})
export class GetSuccessStep_3Page {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public modalCtrl: ModalController,
    public pdfProvider: PdfProvider
  ) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "show-me-the-money":
        data = {
          name: "Show Me the Money",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FWhy-Isagenix-Promo.mp4?alt=media&token=903beebd-f2d1-4e80-9386-8cb764d56cf8"
        };
        break;

      case "eat-it-love-it-share-it":
      data = {
        name: "You Share, They Share, Repeat",
        url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fyou-share-they-share-repeat.mp4?alt=media&token=b7981a94-b577-4d7b-bbe6-db9108cf5e3c"
      }
        break;
    }
    const myModal = this.modalCtrl.create("VideoModalPage", data);

    myModal.present();
  }
}
