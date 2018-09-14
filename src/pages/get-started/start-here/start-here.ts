import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from '../../../providers/pdf/pdf';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-start-here',
  templateUrl: 'start-here.html',
})
export class StartHerePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private modalCtrl: ModalController,
    public auth: AuthProvider
  ) { }

  goForward() {
    this.navCtrl.setRoot("Step1Page");
  }
}
