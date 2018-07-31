import { NgModule } from '@angular/core';
import { GetFooterComponent } from './get-footer/get-footer';
import { LoginComponent } from './login/login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SiteNavComponent } from './site-nav/site-nav';

@NgModule({
	declarations: [
    GetFooterComponent,
    LoginComponent,
    SiteNavComponent],
	imports: [FormsModule, CommonModule],
	exports: [GetFooterComponent,
    LoginComponent,
    SiteNavComponent]
})
export class ComponentsModule {}
