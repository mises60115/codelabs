import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
        <app-housing-location *ngFor="let theLoc of homeCmpntLocList" [locationOfHousingLocCmpnt]="theLoc"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HousingLocationComponent]
})
export class HomeComponent {
  homeCmpntLocList: HousingLocation[] = [];
  homeCmpntHousingSvc: HousingService = inject(HousingService);

  constructor() {
    this.homeCmpntHousingSvc.getAllHousingLocations().then((locList: HousingLocation[]) => { this.homeCmpntLocList = locList });

    //this.locListFromHomeCmpnt = this.housingSvcFromHomeCmpnt.getAllHousingLocations();
  }
}
