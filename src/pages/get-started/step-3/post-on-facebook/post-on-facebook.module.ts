import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostOnFacebookPage } from './post-on-facebook';

@NgModule({
  declarations: [
    PostOnFacebookPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PostOnFacebookPage),
  ],
})
export class PostOnFacebookPageModule {}
