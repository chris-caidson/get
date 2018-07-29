import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-launch-call',
  templateUrl: 'launch-call.html',
})
export class LaunchCallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public auth: AuthProvider) {
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "How to Launch a New Associate Effectively",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Flaunch-associate.mp4?alt=media&token=06536119-df70-49b8-a9b4-8d09548631e2"
    });

    myModal.present();
  }

  goBack() {
    this.navCtrl.pop();
  }
}
