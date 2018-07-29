import { ComponentsModule } from '../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeTextPage } from './welcome-text';

@NgModule({
  declarations: [
    WelcomeTextPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WelcomeTextPage),
  ],
})
export class WelcomeTextPageModule {}
