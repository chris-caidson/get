import { ComponentsModule } from '../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PowerQuotesPage } from './power-quotes';

@NgModule({
  declarations: [
    PowerQuotesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PowerQuotesPage),
  ],
})
export class PowerQuotesPageModule {}
