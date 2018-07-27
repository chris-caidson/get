import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
