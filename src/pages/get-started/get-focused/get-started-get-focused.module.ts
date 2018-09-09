import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetStartedGetFocusedPage } from './get-started-get-focused';

@NgModule({
  declarations: [
    GetStartedGetFocusedPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetStartedGetFocusedPage),
  ],
})
export class GetStartedGetFocusedPageModule {}
