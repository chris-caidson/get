import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanseDayTrackerPage } from './cleanse-day-tracker';

@NgModule({
  declarations: [
    CleanseDayTrackerPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CleanseDayTrackerPage),
  ],
})
export class CleanseDayTrackerPageModule {}
