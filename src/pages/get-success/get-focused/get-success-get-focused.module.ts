import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetSuccessGetFocusedPage } from './get-success-get-focused';

@NgModule({
  declarations: [
    GetSuccessGetFocusedPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetSuccessGetFocusedPage),
  ],
})
export class GetSuccessGetFocusedPageModule {}
