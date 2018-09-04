import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetStartedStep_1Page } from './get-started-step-1';

@NgModule({
  declarations: [
    GetStartedStep_1Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetStartedStep_1Page),
  ],
})
export class GetStartedStep_1PageModule {}
