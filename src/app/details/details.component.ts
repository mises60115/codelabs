import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ detailsLocId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detailsRoute: ActivatedRoute = inject(ActivatedRoute);
  detailsLocId = 0;

  constructor() {
    this.detailsLocId = Number(this.detailsRoute.snapshot.params['id']);
  }
}
