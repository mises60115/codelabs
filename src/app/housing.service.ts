import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { last } from 'rxjs';

@Injectable({
  // root means the service can be used throughout the app
  providedIn: 'root'
})
export class HousingService {

  housingSvcURL = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const allHousingLocs = await fetch(this.housingSvcURL);
    return await allHousingLocs.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    // console.log(`${this.housingSvcURL}/${id}`);

    const housingLoc = await fetch(`${this.housingSvcURL}/${id}`);
    return await housingLoc.json() ?? {};

    //return this.locListFromHousingSvc.find(housingLoc => housingLoc.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
