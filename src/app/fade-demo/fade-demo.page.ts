import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ellipse, square, triangle } from 'ionicons/icons';

@Component({
  selector: 'app-fade-demo',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-back-button defaultHref="/tabs/tab4"></ion-back-button
        ></ion-buttons>
        <ion-title>Tab bar fade</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [fullscreen]="true">
      @for (block of blocks; track block.id) {
        <div class="block" [style.background]="block.color">
          Block {{ block.id }}
        </div>
      }
    </ion-content>
    <ion-tab-bar slot="bottom" scrollEffect="fade" [translucent]="true">
      <ion-tab-button>
        <ion-icon aria-hidden="true" name="triangle"></ion-icon>
        <ion-label>One</ion-label>
      </ion-tab-button>
      <ion-tab-button>
        <ion-icon aria-hidden="true" name="ellipse"></ion-icon>
        <ion-label>Two</ion-label>
      </ion-tab-button>
      <ion-tab-button>
        <ion-icon aria-hidden="true" name="square"></ion-icon>
        <ion-label>Three</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  `,
  styles: [
    `
      .block {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;
        margin: 8px 16px;
        border-radius: 16px;
        color: #fff;
        font-weight: 600;
      }
    `,
  ],
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToolbar,
  ],
})
export class FadeDemoPage {
  blocks = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    color: `hsl(${(i * 47) % 360} 65% 52%)`,
  }));

  constructor() {
    addIcons({ ellipse, square, triangle });
  }
}
