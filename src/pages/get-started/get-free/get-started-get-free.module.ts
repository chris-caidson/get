import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetStartedGetFreePage } from './get-started-get-free';

@NgModule({
  declarations: [
    GetStartedGetFreePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetStartedGetFreePage),
  ],
})
export class GetStartedGetFreePageModule {}
