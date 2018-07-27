import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosPage } from './videos';

@NgModule({
  declarations: [
    VideosPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(VideosPage),
  ],
})
export class VideosPageModule {}
