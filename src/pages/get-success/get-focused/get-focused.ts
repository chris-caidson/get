import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { PdfProvider } from '../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: 'page-get-focused',
  templateUrl: 'get-focused.html',
})
export class GetFocusedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth: AuthProvider, public modalCtrl: ModalController, public pdfProvider: PdfProvider) {
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Know YOUR Why",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FWhy-Isagenix-Promo.mp4?alt=media&token=903beebd-f2d1-4e80-9386-8cb764d56cf8"
    });

    myModal.present();
  }
}