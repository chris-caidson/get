import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverviewPage } from './overview';

@NgModule({
  declarations: [
    OverviewPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(OverviewPage),
  ],
})
export class OverviewPageModule {}
