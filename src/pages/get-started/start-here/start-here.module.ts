import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartHerePage } from './start-here';

@NgModule({
  declarations: [
    StartHerePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StartHerePage),
  ],
})
export class StartHerePageModule {}
