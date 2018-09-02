import { ComponentsModule } from '../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnrollmentInstructionsPage } from './enrollment-instructions';

@NgModule({
  declarations: [
    EnrollmentInstructionsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EnrollmentInstructionsPage),
  ],
})
export class EnrollmentInstructionsPageModule {}
