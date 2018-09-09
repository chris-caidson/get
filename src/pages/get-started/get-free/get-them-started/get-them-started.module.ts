import { ComponentsModule } from '../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetThemStartedPage } from './get-them-started';

@NgModule({
  declarations: [
    GetThemStartedPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetThemStartedPage),
  ],
})
export class GetThemStartedPageModule {}
