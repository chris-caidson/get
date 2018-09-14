import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step1Page } from './step-1';

@NgModule({
  declarations: [
    Step1Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Step1Page),
  ],
})
export class Step1PageModule {}
