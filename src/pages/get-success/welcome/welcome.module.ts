import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';

@NgModule({
  declarations: [
    WelcomePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WelcomePage),
  ],
})
export class WelcomePageModule {}
