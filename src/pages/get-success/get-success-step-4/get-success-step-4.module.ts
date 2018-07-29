import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetSuccessStep_4Page } from './get-success-step-4';

@NgModule({
  declarations: [
    GetSuccessStep_4Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetSuccessStep_4Page),
  ],
})
export class GetSuccessStep_4PageModule {}
