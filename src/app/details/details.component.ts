import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>  
        <input id="email" type="email" formControlName="email">

        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  submitApplication() {
    // ?? is Nullish coalescing operator
    this.detailsHousingSvc.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
  detailsRoute: ActivatedRoute = inject(ActivatedRoute);
  detailsHousingLoc: HousingLocation | undefined;
  detailsHousingSvc: HousingService = inject(HousingService);
  applyForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });

  constructor() {
    const detailsLocId = Number(this.detailsRoute.snapshot.params['id']);
    this.detailsHousingLoc = this.detailsHousingSvc.getHousingLocationById(detailsLocId);
  }
}
