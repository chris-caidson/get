import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetFitPage } from './get-fit';

@NgModule({
  declarations: [
    GetFitPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetFitPage),
  ],
})
export class GetFitPageModule {}
