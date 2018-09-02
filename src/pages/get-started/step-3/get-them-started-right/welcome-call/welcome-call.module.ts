import { ComponentsModule } from '../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeCallPage } from './welcome-call';

@NgModule({
  declarations: [
    WelcomeCallPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WelcomeCallPage),
  ],
})
export class WelcomeCallPageModule {}
