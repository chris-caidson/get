import { ComponentsModule } from '../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeforeYouPostPage } from './before-you-post';

@NgModule({
  declarations: [
    BeforeYouPostPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BeforeYouPostPage),
  ],
})
export class BeforeYouPostPageModule {}
