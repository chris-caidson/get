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
  selector: "page-get-free",
  templateUrl: "get-free.html"
})
export class GetFreePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public pdfProvider: PdfProvider,
    public modalCtrl: ModalController
  ) {}

  openVideoModal(video: string) {
    if (video === "share") {
      const myModal = this.modalCtrl.create("VideoModalPage", {
        name: "You Share, They Share, Repeat",
        url:
          "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fyou-share-they-share-repeat.mp4?alt=media&token=b7981a94-b577-4d7b-bbe6-db9108cf5e3c"
      });

      myModal.present();
    }
    else if (video === "virtual-franchise") {
      const myModal = this.modalCtrl.create("VideoModalPage", {
        name: "A Virtual Franchise",
        url:
          "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FWhy-Isagenix-Promo.mp4?alt=media&token=903beebd-f2d1-4e80-9386-8cb764d56cf8"
      });

      myModal.present();
    }
    else if (video === "value-pak") {
      const myModal = this.modalCtrl.create("VideoModalPage", {
        name: "Melissa Henault - Value Pak",
        url:
          "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fmelissa-henault-value-pak.mp4?alt=media&token=b1cf6748-c96c-4e8b-95d6-261c03c437cb"
      });

      myModal.present();
    }
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }
}
