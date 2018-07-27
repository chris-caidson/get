import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-podcasts',
  templateUrl: 'podcasts.html',
})
export class PodcastsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
