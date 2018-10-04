import { ComponentsModule } from "../../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { Step3Page } from "./step-3";

@NgModule({
  declarations: [
    Step3Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Step3Page),
  ],
})
export class Step3PageModule {}
