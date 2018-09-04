import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetStartedStep_3Page } from './get-started-step-3';

@NgModule({
  declarations: [
    GetStartedStep_3Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetStartedStep_3Page),
  ],
})
export class GetStartedStep_3PageModule {}
