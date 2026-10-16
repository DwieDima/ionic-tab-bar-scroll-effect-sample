import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-tab4-combined',
  template: `
    <ion-header scrollEffect="hide">
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-back-button defaultHref="/tabs/tab4"></ion-back-button
        ></ion-buttons>
        <ion-title>Header + footer + tab bar hide</ion-title>
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
    <ion-footer scrollEffect="hide">
      <ion-toolbar>
        <ion-title>Footer, scrollEffect=hide</ion-title>
      </ion-toolbar>
    </ion-footer>
  `,
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab4CombinedPage {
  items = Array.from({ length: 80 }, (_, i) => i + 1);
}
