import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PodcastsPage } from './podcasts';

@NgModule({
  declarations: [
    PodcastsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PodcastsPage),
  ],
})
export class PodcastsPageModule {}
