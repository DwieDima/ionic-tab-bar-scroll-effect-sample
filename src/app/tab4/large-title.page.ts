import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-tab4-large-title',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-back-button defaultHref="/tabs/tab4"></ion-back-button
        ></ion-buttons>
        <ion-title>Large title</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [fullscreen]="true" [tabBarScrollEffect]="true">
      <ion-header scrollEffect="condense">
        <ion-toolbar>
          <ion-title size="large">Large title</ion-title>
        </ion-toolbar>
      </ion-header>
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
    IonTitle,
    IonToolbar,
  ],
})
export class Tab4LargeTitlePage {
  items = Array.from({ length: 80 }, (_, i) => i + 1);
}
