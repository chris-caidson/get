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

  openVideoModal() {
      const myModal = this.modalCtrl.create("VideoModalPage", {
        name: "Isagenix Compensation Plan",
        url:
          "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ferin-adrienne-comp-plan.mp4?alt=media&token=79a6bd74-b245-4a41-a744-f843ee23e25f"
      });

      myModal.present();
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }
}
