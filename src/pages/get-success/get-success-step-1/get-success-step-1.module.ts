import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetSuccessStep_1Page } from './get-success-step-1';

@NgModule({
  declarations: [
    GetSuccessStep_1Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetSuccessStep_1Page),
  ],
})
export class GetSuccessStep_1PageModule {}
