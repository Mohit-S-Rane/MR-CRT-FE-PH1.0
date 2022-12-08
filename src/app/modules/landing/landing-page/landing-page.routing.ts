import { Route } from '@angular/router';
import { LandingPageComponent } from './view/landing-page.component';

export const landingPageRoutes: Route[] = [
    {
        path     : '',
        component: LandingPageComponent
    }
];
