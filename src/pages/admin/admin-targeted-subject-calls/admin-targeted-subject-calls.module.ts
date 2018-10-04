import { ComponentsModule } from "../../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AdminTargetedSubjectCallsPage } from "./admin-targeted-subject-calls";

@NgModule({
  declarations: [
    AdminTargetedSubjectCallsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdminTargetedSubjectCallsPage),
  ],
})
export class AdminTargetedSubjectCallsPageModule {}
