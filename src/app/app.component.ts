import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HomeComponent, HousingLocationComponent],
  template: `
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
      <section class="results">
        <app-housing-location></app-housing-location>
      </section>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
