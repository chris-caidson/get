import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-book-modal',
  templateUrl: 'book-modal.html',
})
export class BookModalPage {
  bookName: string;
  imgUrl: string;
  summary1: string;
  summary2: string;
  summary3: string;
  author: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewWillLoad() {
    this.bookName = this.navParams.get("bookName");
    this.imgUrl = this.navParams.get("imgUrl");
    this.summary1 = this.navParams.get("summary1");
    this.summary2 = this.navParams.get("summary2");
    this.summary3 = this.navParams.get("summary3");
    this.author = this.navParams.get("author");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
