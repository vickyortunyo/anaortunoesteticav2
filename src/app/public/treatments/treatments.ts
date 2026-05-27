import { Component } from '@angular/core';
import { TREATMENTS, CATEGORIES } from './treatments.data';
import { TreatmentCard } from '../../shared/components/treatment-card/treatment-card';
import { ScrollAnimate } from '../../core/directives/scroll-animate';

@Component({
  selector: 'app-treatments',
  imports: [TreatmentCard, ScrollAnimate],
  templateUrl: './treatments.html',
  styles: ``
})
export class Treatments {
  categories = CATEGORIES;
  treatments = TREATMENTS;

  getTreatmentsByCategory(categoryId: string) {
    return this.treatments.filter(t => t.category === categoryId);
  }
}
