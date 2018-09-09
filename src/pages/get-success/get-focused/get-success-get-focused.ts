import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { PdfProvider } from '../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: 'page-get-success-get-focused',
  templateUrl: 'get-success-get-focused.html',
})
export class GetSuccessGetFocusedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth: AuthProvider, public modalCtrl: ModalController, public pdfProvider: PdfProvider) {
  }

  // openVideoModal() {
  //   const myModal = this.modalCtrl.create("VideoModalPage", {
  //     name: "Establishing Your Why",
  //     url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Festablish-your-why.mp4?alt=media&token=d6cb2aed-bf84-4cd5-8469-daa708c0d631"
  //   });

  //   myModal.present();
  // }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }

  openHomePage() {
    this.navCtrl.setRoot("HomePage");
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
