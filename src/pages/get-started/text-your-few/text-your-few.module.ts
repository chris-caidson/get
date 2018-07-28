import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextYourFewPage } from './text-your-few';

@NgModule({
  declarations: [
    TextYourFewPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TextYourFewPage),
  ],
})
export class TextYourFewPageModule {}
