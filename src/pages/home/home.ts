import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController, public auth: AuthProvider) {
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Welcome to the Global Exec Team",
      url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fwelcome-to-the-global-exec-team.mp4?alt=media&token=e8d29b5c-b45d-4ceb-8cd3-aeffa76ec9a8"
    });

    myModal.present();
  }
}
