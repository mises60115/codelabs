import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="locationOfHousingLocCmpnt.photo" alt="Exterior photo of {{ locationOfHousingLocCmpnt.name }}">
      <h2 class="listing-heading">{{ locationOfHousingLocCmpnt.name }}</h2>
      <p class="listing-location">{{ locationOfHousingLocCmpnt.city }}, {{ locationOfHousingLocCmpnt.state }}</p>
      <a [routerLink]="['/details', locationOfHousingLocCmpnt.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  /* ! estimation point or non-null assertion operator
  tells typescript the property will not be undefined */
  @Input() locationOfHousingLocCmpnt!: HousingLocation;
}
