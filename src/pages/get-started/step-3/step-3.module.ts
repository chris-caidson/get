import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step_3Page } from './step-3';

@NgModule({
  declarations: [
    Step_3Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Step_3Page),
  ],
})
export class Step_3PageModule {}
