import { Component, ViewEncapsulation } from '@angular/core';
import { Chat } from 'app/layout/common/quick-chat/quick-chat.types';

@Component({
    selector     : 'landing-page',
    templateUrl  : './landing-page.component.html',
    styleUrls    : ['./landing-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent
{
    chats: Chat[];
    drawerComponent: 'profile' | 'new-chat';
    drawerOpened: boolean = false;
    /**
     * Constructor
     */
    constructor()
    {
    }
}
