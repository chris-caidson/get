import { ComponentsModule } from "../../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { Step2Page } from "./step-2";

@NgModule({
  declarations: [
    Step2Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Step2Page),
  ],
})
export class Step2PageModule {}
