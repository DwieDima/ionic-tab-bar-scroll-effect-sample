import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-tab1-detail',
  template: `
    <ion-header scrollEffect="hide">
      <ion-toolbar>
        <ion-buttons slot="start"><ion-back-button defaultHref="/tabs/tab1"></ion-back-button></ion-buttons>
        <ion-title>{{ tabBarScrollEffect ? 'Sub page (header + tab bar hide)' : 'Sub page (header hides, tab bar stays)' }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [tabBarScrollEffect]="tabBarScrollEffect">
      <ion-list>
        @for (i of items; track i) {
          <ion-item><ion-label>Sub page item {{ i }}</ion-label></ion-item>
        }
      </ion-list>
    </ion-content>
  `,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar],
})
export class Tab1DetailPage {
  items = Array.from({ length: 80 }, (_, i) => i + 1);
  // true on the second sub page, which keeps the tab bar scroll effect on a page that can go back
  tabBarScrollEffect: boolean | undefined = inject(ActivatedRoute).snapshot.data['tabBarScrollEffect'];
}
