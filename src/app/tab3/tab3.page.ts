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
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
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
export class Tab3Page {
  items = Array.from({ length: 80 }, (_, i) => i + 1);

  // The tab bar effect comes from ?tabBar=hide|fade|none, see the tabs page
  title =
    { fade: 'Header hides, bar fades', none: 'Header hides' }[
      new URLSearchParams(location.search).get('tabBar') ?? ''
    ] ?? 'Header + tab bar hide';
}
