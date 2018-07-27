import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadershipCallsPage } from './leadership-calls';

@NgModule({
  declarations: [
    LeadershipCallsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LeadershipCallsPage),
  ],
})
export class LeadershipCallsPageModule {}
