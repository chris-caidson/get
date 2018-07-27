import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from '../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: 'page-step-1',
  templateUrl: 'step-1.html',
})
export class Step_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pdfProvider: PdfProvider,) {
  }

}
