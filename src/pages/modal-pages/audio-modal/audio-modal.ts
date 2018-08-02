import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-audio-modal',
  templateUrl: 'audio-modal.html',
})
export class AudioModalPage {
  category: string;
  subject: string;
  recorded: string;
  url: string;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {}

  ionViewWillLoad() {
    this.category = this.navParams.get("category");
    this.subject = this.navParams.get("subject");
    this.recorded = this.navParams.get("recorded");
    this.url = this.navParams.get("url");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
