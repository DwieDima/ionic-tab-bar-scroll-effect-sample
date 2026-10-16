import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class Tab2Page {
  items = Array.from({ length: 80 }, (_, i) => i + 1);

  // The tab bar effect comes from ?tabBar=hide|fade|none, see the tabs page
  title =
    { fade: 'Tab bar fades', none: 'No tab bar effect' }[
      new URLSearchParams(location.search).get('tabBar') ?? ''
    ] ?? 'Tab bar hides';
}
