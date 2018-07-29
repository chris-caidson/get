import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderFormPage } from './order-form';

@NgModule({
  declarations: [
    OrderFormPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(OrderFormPage),
  ],
})
export class OrderFormPageModule {}
