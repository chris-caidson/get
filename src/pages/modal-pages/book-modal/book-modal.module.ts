import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookModalPage } from './book-modal';

@NgModule({
  declarations: [
    BookModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BookModalPage),
  ],
})
export class BookModalPageModule {}
