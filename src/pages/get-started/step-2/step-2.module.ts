import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step_2Page } from './step-2';

@NgModule({
  declarations: [
    Step_2Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Step_2Page),
  ],
})
export class Step_2PageModule {}
