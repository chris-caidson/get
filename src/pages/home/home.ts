import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,) {
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Why Isagenix",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FWhy-Isagenix-Promo.mp4?alt=media&token=903beebd-f2d1-4e80-9386-8cb764d56cf8"
    });
    
    myModal.present();
  }
}
