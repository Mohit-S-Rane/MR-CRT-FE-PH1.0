import { Route } from '@angular/router';
import { ProjectComponent } from 'app/modules/admin/dashboards/project/project.component';
import { ProjectResolver } from 'app/modules/admin/dashboards/project/project.resolvers';
import { ConsumerDashboardComponent } from './view/consumer-dashboard.component';

export const consumerDashboardRoutes: Route[] = [
    {
        path     : '',
        component: ConsumerDashboardComponent,
        resolve  : {
            data: ProjectResolver
        }
    }
];
