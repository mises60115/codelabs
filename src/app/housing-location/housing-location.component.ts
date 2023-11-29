import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="locFromHousingLocCmpnt.photo" alt="Exterior photo of {{ locFromHousingLocCmpnt.name }}">
      <h2 class="listing-heading">{{ locFromHousingLocCmpnt.name }}</h2>
      <p class="listing-location">{{ locFromHousingLocCmpnt.city }}, {{ locFromHousingLocCmpnt.state }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  /* ! estimation point or non-null assertion operator
  tells typescript the property will not be undefined */
  @Input() locFromHousingLocCmpnt!: HousingLocation;
}
