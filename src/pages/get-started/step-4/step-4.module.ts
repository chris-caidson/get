import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step_4Page } from './step-4';

@NgModule({
  declarations: [
    Step_4Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Step_4Page),
  ],
})
export class Step_4PageModule {}
