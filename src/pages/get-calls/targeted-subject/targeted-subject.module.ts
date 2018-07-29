import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargetedSubjectPage } from './targeted-subject';

@NgModule({
  declarations: [
    TargetedSubjectPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TargetedSubjectPage),
  ],
})
export class TargetedSubjectPageModule {}
