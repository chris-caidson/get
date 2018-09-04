import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetFocusedPage } from './get-focused';

@NgModule({
  declarations: [
    GetFocusedPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetFocusedPage),
  ],
})
export class GetFocusedPageModule {}
