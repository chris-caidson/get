import { ComponentsModule } from '../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchCallPage } from './launch-call';

@NgModule({
  declarations: [
    LaunchCallPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LaunchCallPage),
  ],
})
export class LaunchCallPageModule {}
