import { ComponentsModule } from '../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetThemStartedRightPage } from './get-them-started-right';

@NgModule({
  declarations: [
    GetThemStartedRightPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetThemStartedRightPage),
  ],
})
export class GetThemStartedRightPageModule {}
