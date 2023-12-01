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
        <input type="text" placeholder="Filter by city" #filterInputElem />
        <button class="primary" type="button" (click)="filterResults(filterInputElem.value)">Search</button>
      </form>
    </section>
    <section class="results">
        <app-housing-location *ngFor="let theLoc of homeCmpntFilteredLocList" [locationOfHousingLocCmpnt]="theLoc"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HousingLocationComponent]
})
export class HomeComponent {

  homeCmpntAllLocList: HousingLocation[] = [];
  homeCmpntHousingSvc: HousingService = inject(HousingService);
  homeCmpntFilteredLocList: HousingLocation[] = [];

  constructor() {
    this.homeCmpntHousingSvc.getAllHousingLocations().then((locList: HousingLocation[]) => {
      this.homeCmpntAllLocList = locList;
      this.homeCmpntFilteredLocList = locList
    });


    //this.locListFromHomeCmpnt = this.housingSvcFromHomeCmpnt.getAllHousingLocations();
  }

  filterResults(filterInputText: string) {
    if (!filterInputText) {
      this.homeCmpntFilteredLocList = this.homeCmpntAllLocList;
    }
    this.homeCmpntFilteredLocList = this.homeCmpntAllLocList.filter(theLoc => theLoc?.city.toLowerCase().includes(filterInputText.toLowerCase()));
  }
}
