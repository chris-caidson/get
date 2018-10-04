import { ComponentsModule } from "../../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GetSuccessGetFreePage } from "./get-success-get-free";

@NgModule({
  declarations: [
    GetSuccessGetFreePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetSuccessGetFreePage),
  ],
})
export class GetSuccessGetFreePageModule {}
