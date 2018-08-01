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

@NgModule({
	declarations: [
    GetFooterComponent,
    LoginComponent,
    SiteNavComponent,
    NavMainComponent,
    NavGetStartedComponent,
    NavGetSuccessComponent,
    NavGetCallsComponent,
    NavGetElevatedComponent],
	imports: [FormsModule, CommonModule],
	exports: [GetFooterComponent,
    LoginComponent,
    SiteNavComponent,
    NavMainComponent,
    NavGetStartedComponent,
    NavGetSuccessComponent,
    NavGetCallsComponent,
    NavGetElevatedComponent]
})
export class ComponentsModule {}
