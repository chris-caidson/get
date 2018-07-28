import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowUpScriptPage } from './follow-up-script';

@NgModule({
  declarations: [
    FollowUpScriptPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FollowUpScriptPage),
  ],
})
export class FollowUpScriptPageModule {}
