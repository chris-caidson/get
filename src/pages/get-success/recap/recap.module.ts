import { ComponentsModule } from '../../../components/components.module'
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecapPage } from './recap';

@NgModule({
  declarations: [
    RecapPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RecapPage),
  ],
})
export class RecapPageModule {}
