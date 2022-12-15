import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { PaymentFlowComponent } from './view/payment-flow.component';
import { PaymentFlowRoutes } from './payment-flow.router';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [PaymentFlowComponent],
  imports: [
    RouterModule.forChild(PaymentFlowRoutes),
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    MatMenuModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatStepperModule,
  ],
})
export class PaymentFlowModule {}
