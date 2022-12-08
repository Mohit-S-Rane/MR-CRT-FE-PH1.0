import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingPageComponent } from './view/landing-page.component';
import { landingPageRoutes } from './landing-page.routing';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports     : [
        RouterModule.forChild(landingPageRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatSidenavModule
    ]
})
export class LandingPageModule
{
}
