import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetSuccessGetFitPage } from './get-success-get-fit';

@NgModule({
  declarations: [
    GetSuccessGetFitPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetSuccessGetFitPage),
  ],
})
export class GetSuccessGetFitPageModule {}
