import { NgModule } from '@angular/core';
import { GetFooterComponent } from './get-footer/get-footer';
import { LoginComponent } from './login/login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SiteNavComponent } from './site-nav/site-nav';
import { NavMainComponent } from './nav-main/nav-main';
import { NavGetStartedComponent } from './nav-get-started/nav-get-started';
import { NavGetSuccessComponent } from './nav-get-success/nav-get-success';
import { NavGetCallsComponent } from './nav-get-calls/nav-get-calls';
import { NavGetElevatedComponent } from './nav-get-elevated/nav-get-elevated';
import { NavAdminComponent } from './nav-admin/nav-admin';

@NgModule({
	declarations: [
    GetFooterComponent,
    LoginComponent,
    SiteNavComponent,
    NavMainComponent,
    NavGetStartedComponent,
    NavGetSuccessComponent,
    NavGetCallsComponent,
    NavGetElevatedComponent,
    NavAdminComponent],
	imports: [FormsModule, CommonModule],
	exports: [GetFooterComponent,
    LoginComponent,
    SiteNavComponent,
    NavMainComponent,
    NavGetStartedComponent,
    NavGetSuccessComponent,
    NavGetCallsComponent,
    NavGetElevatedComponent,
    NavAdminComponent]
})
export class ComponentsModule {}
