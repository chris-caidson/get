import { NgModule } from '@angular/core';
import { GetFooterComponent } from './get-footer/get-footer';
import { LoginComponent } from './login/login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [GetFooterComponent,
    LoginComponent],
	imports: [FormsModule, CommonModule],
	exports: [GetFooterComponent,
    LoginComponent]
})
export class ComponentsModule {}
