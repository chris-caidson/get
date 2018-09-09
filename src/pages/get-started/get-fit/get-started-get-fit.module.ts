import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetStartedGetFitPage } from './get-started-get-fit';

@NgModule({
  declarations: [
    GetStartedGetFitPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetStartedGetFitPage),
  ],
})
export class GetStartedGetFitPageModule {}
