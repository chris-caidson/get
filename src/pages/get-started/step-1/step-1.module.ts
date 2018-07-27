import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step_1Page } from './step-1';

@NgModule({
  declarations: [
    Step_1Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Step_1Page),
  ],
})
export class Step_1PageModule {}
