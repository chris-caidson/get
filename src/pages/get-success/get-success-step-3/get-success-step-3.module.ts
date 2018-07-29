import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetSuccessStep_3Page } from './get-success-step-3';

@NgModule({
  declarations: [
    GetSuccessStep_3Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetSuccessStep_3Page),
  ],
})
export class GetSuccessStep_3PageModule {}
