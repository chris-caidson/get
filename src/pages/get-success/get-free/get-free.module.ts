import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetFreePage } from './get-free';

@NgModule({
  declarations: [
    GetFreePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetFreePage),
  ],
})
export class GetFreePageModule {}
