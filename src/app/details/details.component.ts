import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article>
    <img class="listing-photo" [src]="detailsHousingLoc?.photo" alt="Exterior photo of {{ detailsHousingLoc?.name }}">
    <section class="listing-description">
      <h2 class="listing-heading">{{ detailsHousingLoc?.name }}</h2>
      <p class="listing-location">{{ detailsHousingLoc?.city }}, {{ detailsHousingLoc?.state }}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{ detailsHousingLoc?.availableUnits }}</li>
        <li>Does this location have wifi: {{ detailsHousingLoc?.wifi }}</li>
        <li>Does this location have laundry: {{ detailsHousingLoc?.laundry }}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <button class="primary" type="button" >Apply now</button>
    </section>
  </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detailsRoute: ActivatedRoute = inject(ActivatedRoute);
  detailsHousingLoc: HousingLocation | undefined;
  detailsHousingSvc: HousingService = inject(HousingService);

  constructor() {
    const detailsLocId = Number(this.detailsRoute.snapshot.params['id']);
    this.detailsHousingLoc = this.detailsHousingSvc.getHousingLocationById(detailsLocId);
  }
}
