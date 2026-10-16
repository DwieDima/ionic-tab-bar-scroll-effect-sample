import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, list } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  // Open the app with ?tabBar=fade, ?tabBar=none to compare the tab bar scroll effects.
  public scrollEffect =
    new URLSearchParams(location.search).get('tabBar') ?? 'hide';

  constructor() {
    addIcons({ triangle, ellipse, square, list });
  }
}
