import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetSuccessStep_2Page } from './get-success-step-2';

@NgModule({
  declarations: [
    GetSuccessStep_2Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetSuccessStep_2Page),
  ],
})
export class GetSuccessStep_2PageModule {}
