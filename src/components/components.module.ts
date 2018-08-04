import { NgModule } from '@angular/core';
import { GetFooterComponent } from './get-footer/get-footer';
import { LoginComponent } from './login/login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavMainComponent } from './nav-main/nav-main';
import { NavGetStartedComponent } from './nav-get-started/nav-get-started';
import { NavGetSuccessComponent } from './nav-get-success/nav-get-success';
import { NavGetCallsComponent } from './nav-get-calls/nav-get-calls';
import { NavGetElevatedComponent } from './nav-get-elevated/nav-get-elevated';
import { NavAdminComponent } from './nav-admin/nav-admin';
import { AdminLoginComponent } from './admin-login/admin-login';

@NgModule({
	declarations: [
    GetFooterComponent,
    LoginComponent,
    NavMainComponent,
    NavGetStartedComponent,
    NavGetSuccessComponent,
    NavGetCallsComponent,
    NavGetElevatedComponent,
    NavAdminComponent,
    AdminLoginComponent],
	imports: [FormsModule, CommonModule],
	exports: [GetFooterComponent,
    LoginComponent,
    NavMainComponent,
    NavGetStartedComponent,
    NavGetSuccessComponent,
    NavGetCallsComponent,
    NavGetElevatedComponent,
    NavAdminComponent,
    AdminLoginComponent]
})
export class ComponentsModule {}
