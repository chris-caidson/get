import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyCallsPage } from './daily-calls';

@NgModule({
  declarations: [
    DailyCallsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DailyCallsPage),
  ],
})
export class DailyCallsPageModule {}
