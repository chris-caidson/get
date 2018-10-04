import { ComponentsModule } from "../../../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { DuplicationSystemPage } from "./duplication-system";

@NgModule({
  declarations: [
    DuplicationSystemPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DuplicationSystemPage),
  ],
})
export class DuplicationSystemPageModule {}
