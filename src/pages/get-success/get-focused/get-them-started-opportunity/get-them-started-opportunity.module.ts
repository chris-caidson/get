import { ComponentsModule } from "../../../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GetThemStartedOpportunityPage } from "./get-them-started-opportunity";

@NgModule({
  declarations: [
    GetThemStartedOpportunityPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetThemStartedOpportunityPage),
  ],
})
export class GetThemStartedOpportunityPageModule {}
