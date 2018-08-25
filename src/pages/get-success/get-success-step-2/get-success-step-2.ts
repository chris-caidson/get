import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-get-success-step-2",
  templateUrl: "get-success-step-2.html"
})
export class GetSuccessStep_2Page {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public modalCtrl: ModalController
  ) {}

  openVideoModal(video: string) {
    if (video === "virtual-franchise") {
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
