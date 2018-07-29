import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step_5Page } from './step-5';

@NgModule({
  declarations: [
    Step_5Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Step_5Page),
  ],
})
export class Step_5PageModule {}
