import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MsrAlertModule } from '@msr/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { HelpCenterComponent } from 'app/modules/admin/apps/help-center/help-center.component';
import { HelpCenterFaqsComponent } from 'app/modules/admin/apps/help-center/faqs/faqs.component';
import { HelpCenterGuidesComponent } from 'app/modules/admin/apps/help-center/guides/guides.component';
import { HelpCenterGuidesCategoryComponent } from 'app/modules/admin/apps/help-center/guides/category/category.component';
import { HelpCenterGuidesGuideComponent } from 'app/modules/admin/apps/help-center/guides/guide/guide.component';
import { HelpCenterSupportComponent } from 'app/modules/admin/apps/help-center/support/support.component';
import { CompleteReservationRoutes } from './complete-reservation.routing';
import { CompleteReservationComponent } from './view/complete-reservation.component';
import { NewHelpCenterFaqsModule } from '../../test-module/help-center-faq.module';

@NgModule({
    declarations: [
        CompleteReservationComponent,
        // HelpCenterFaqsComponent,
        // HelpCenterGuidesComponent,
        // HelpCenterGuidesCategoryComponent,
        // HelpCenterGuidesGuideComponent,
        // HelpCenterSupportComponent
    ],
    imports     : [
        RouterModule.forChild(CompleteReservationRoutes),
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MsrAlertModule,
        SharedModule,
        // NewHelpCenterFaqsModule

    ]
})
export class CompleteReservationModule
{
}
