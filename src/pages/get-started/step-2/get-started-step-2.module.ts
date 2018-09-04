import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetStartedStep_2Page } from './get-started-step-2';

@NgModule({
  declarations: [
    GetStartedStep_2Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetStartedStep_2Page),
  ],
})
export class GetStartedStep_2PageModule {}
