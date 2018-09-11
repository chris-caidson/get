import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { PdfProvider } from '../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: 'page-get-started-get-free',
  templateUrl: 'get-started-get-free.html',
})
export class GetStartedGetFreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,
    public auth: AuthProvider, public pdfProvider: PdfProvider) {
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }

  openHomePage() {
    this.navCtrl.setRoot("HomePage");
  }

  goBack() {
    this.navCtrl.setRoot("GetStartedGetFocusedPage");
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Overcoming Objections",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fovercoming-objections.mp4?alt=media&token=bdeeed68-ff46-41eb-bc1c-5ea7dc3dd476"
    });
    myModal.present();
  }
}
