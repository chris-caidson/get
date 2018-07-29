import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetSuccessStep_5Page } from './get-success-step-5';

@NgModule({
  declarations: [
    GetSuccessStep_5Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetSuccessStep_5Page),
  ],
})
export class GetSuccessStep_5PageModule {}
