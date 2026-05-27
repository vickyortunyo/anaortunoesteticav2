import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CATEGORIES, Treatment } from './treatments.data';
import { TreatmentCard } from '../../shared/components/treatment-card/treatment-card';
import { ScrollAnimate } from '../../core/directives/scroll-animate';
import { TreatmentsService } from '../../core/services/treatments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-treatments',
  imports: [TreatmentCard, ScrollAnimate],
  templateUrl: './treatments.html',
  styles: ``
})
export class Treatments implements OnInit, OnDestroy {
  categories = CATEGORIES;
  treatments: Treatment[] = [];
  private treatmentsService = inject(TreatmentsService);
  private sub?: Subscription;

  ngOnInit() {
    this.sub = this.treatmentsService.getTreatments().subscribe(t => {
      this.treatments = t;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  getTreatmentsByCategory(categoryId: string) {
    return this.treatments.filter(t => t.category === categoryId);
  }
}
