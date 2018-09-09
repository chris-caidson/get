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
      name: "You Share, They Share, Repeat",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fyou-share-they-share-repeat.mp4?alt=media&token=b7981a94-b577-4d7b-bbe6-db9108cf5e3c"
    });

    myModal.present();
  }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }
}
