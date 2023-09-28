/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

let currentPopup: any = undefined;
var isCoWebSiteOpened =  false;
var urlWA ='https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure';

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

WA.room.area.onEnter("boothWa").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popupWa","Interested in discovering the opportunities presented by our virtual environments, offices and events? Reach out to us or visit our DB Planet page for more details",
    [
        {
            label: "DB Planet",
            callback: () => {
                WA.nav.openTab(urlWA)
                closePopup();
            }
        },
        {
            label: "Close",
            callback: () => {
                closePopup();
            }
        }
        ]);
});

WA.room.area.onLeave("boothWa").subscribe(() => {
    closePopup();
})

export {};