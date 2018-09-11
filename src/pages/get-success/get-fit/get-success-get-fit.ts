import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PdfProvider } from '../../../providers/pdf/pdf';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-get-success-get-fit',
  templateUrl: 'get-success-get-fit.html',
})
export class GetSuccessGetFitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pdfProvider: PdfProvider,
    public modalCtrl: ModalController, public auth: AuthProvider) {
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Establish Your Why",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Festablish-your-why.mp4?alt=media&token=d6cb2aed-bf84-4cd5-8469-daa708c0d631"
    });

    myModal.present();
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }

  goForward() {
    this.navCtrl.setRoot("GetSuccessGetFocusedPage");
  }
}
