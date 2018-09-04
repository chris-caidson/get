import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekdayCallsPage } from './weekday-calls';

@NgModule({
  declarations: [
    WeekdayCallsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WeekdayCallsPage),
  ],
})
export class WeekdayCallsPageModule {}
