import { ComponentsModule } from "../../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AdminTargetedSubjectCategoriesPage } from "./admin-targeted-subject-categories";

@NgModule({
  declarations: [
    AdminTargetedSubjectCategoriesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdminTargetedSubjectCategoriesPage),
  ],
})
export class AdminTargetedSubjectCategoriesPageModule {}
