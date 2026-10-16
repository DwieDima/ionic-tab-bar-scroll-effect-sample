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
  selector: 'app-tab4-footer-fade',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-back-button defaultHref="/tabs/tab4"></ion-back-button
        ></ion-buttons>
        <ion-title>Footer fades (tab bar stays)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        @for (i of items; track i) {
          <ion-item
            ><ion-label>Item {{ i }}</ion-label></ion-item
          >
        }
      </ion-list>
    </ion-content>
    <ion-footer scrollEffect="fade">
      <ion-toolbar>
        <ion-title>Footer, scrollEffect=fade</ion-title>
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
export class Tab4FooterFadePage {
  items = Array.from({ length: 80 }, (_, i) => i + 1);
}
