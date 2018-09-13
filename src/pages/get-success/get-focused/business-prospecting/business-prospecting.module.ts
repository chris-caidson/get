import { ComponentsModule } from '../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessProspectingPage } from './business-prospecting';

@NgModule({
  declarations: [
    BusinessProspectingPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BusinessProspectingPage),
  ],
})
export class BusinessProspectingPageModule {}
