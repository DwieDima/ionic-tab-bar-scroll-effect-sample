import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-tab4-multi-toolbar',
  template: `
    <ion-header scrollEffect="hide">
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-back-button defaultHref="/tabs/tab4"></ion-back-button
        ></ion-buttons>
        <ion-title>Header with three toolbars</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search"></ion-searchbar>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment value="all">
          <ion-segment-button value="all"
            ><ion-label>All</ion-label></ion-segment-button
          >
          <ion-segment-button value="new"
            ><ion-label>New</ion-label></ion-segment-button
          >
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content [tabBarScrollEffect]="true">
      <ion-list>
        @for (i of items; track i) {
          <ion-item
            ><ion-label>Item {{ i }}</ion-label></ion-item
          >
        }
      </ion-list>
    </ion-content>
  `,
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab4MultiToolbarPage {
  items = Array.from({ length: 80 }, (_, i) => i + 1);
}
