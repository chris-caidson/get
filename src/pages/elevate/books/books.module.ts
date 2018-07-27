import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksPage } from './books';

@NgModule({
  declarations: [
    BooksPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BooksPage),
  ],
})
export class BooksPageModule {}
