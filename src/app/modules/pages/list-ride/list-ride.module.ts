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
import { ListRideComponent } from './view/list-ride.component';
import { ListRideRoutes } from './list-ride.routing';

@NgModule({
  declarations: [ListRideComponent],
  imports: [
    RouterModule.forChild(ListRideRoutes),
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
  ],
})
export class ListRideModule {}
