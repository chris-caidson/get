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
      name: "You Share, They Share, Repeat",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fyou-share-they-share-repeat.mp4?alt=media&token=b7981a94-b577-4d7b-bbe6-db9108cf5e3c"
    });
    myModal.present();
  }
}
