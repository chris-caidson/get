import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDailyCallsPage } from './admin-daily-calls';

@NgModule({
  declarations: [
    AdminDailyCallsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdminDailyCallsPage),
  ],
})
export class AdminDailyCallsPageModule {}
