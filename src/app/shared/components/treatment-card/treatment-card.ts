import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Treatment } from '../../../public/treatments/treatments.data';

@Component({
  selector: 'app-treatment-card',
  imports: [RouterLink],
  templateUrl: './treatment-card.html',
  styles: ``
})
export class TreatmentCard {
  treatment = input.required<Treatment>();
}
