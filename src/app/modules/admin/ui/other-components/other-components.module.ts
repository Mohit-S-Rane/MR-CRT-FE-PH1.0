import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MsrHighlightModule } from '@msr/components/highlight';
import { MsrAlertModule } from '@msr/components/alert';
import { MsrNavigationModule } from '@msr/components/navigation';
import { MsrScrollResetModule } from '@msr/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { OtherComponentsComponent } from 'app/modules/admin/ui/other-components/other-components.component';
import { OverviewComponent } from 'app/modules/admin/ui/other-components/common/overview/overview.component';
import { LanguagesComponent } from 'app/modules/admin/ui/other-components/common/languages/languages.component';
import { MessagesComponent } from 'app/modules/admin/ui/other-components/common/messages/messages.component';
import { NotificationsComponent } from 'app/modules/admin/ui/other-components/common/notifications/notifications.component';
import { QuickChatComponent } from 'app/modules/admin/ui/other-components/common/quick-chat/quick-chat.component';
import { SearchComponent } from 'app/modules/admin/ui/other-components/common/search/search.component';
import { ShortcutsComponent } from 'app/modules/admin/ui/other-components/common/shortcuts/shortcuts.component';
import { UserComponent } from 'app/modules/admin/ui/other-components/common/user/user.component';
import { ApexChartsComponent } from 'app/modules/admin/ui/other-components/third-party/apex-charts/apex-charts.component';
import { NgxMarkdownComponent } from 'app/modules/admin/ui/other-components/third-party/ngx-markdown/ngx-markdown.component';
import { QuillEditorComponent } from 'app/modules/admin/ui/other-components/third-party/quill-editor/quill-editor.component';
import { otherComponentsRoutes } from 'app/modules/admin/ui/other-components/other-components.routing';

@NgModule({
    declarations: [
        OtherComponentsComponent,
        OverviewComponent,
        LanguagesComponent,
        MessagesComponent,
        NotificationsComponent,
        QuickChatComponent,
        SearchComponent,
        ShortcutsComponent,
        UserComponent,
        ApexChartsComponent,
        NgxMarkdownComponent,
        QuillEditorComponent
    ],
    imports     : [
        RouterModule.forChild(otherComponentsRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MsrHighlightModule,
        MsrAlertModule,
        MsrNavigationModule,
        MsrScrollResetModule,
        SharedModule
    ]
})
export class OtherComponentsModule
{
}
