import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TREATMENTS, Treatment } from '../treatments/treatments.data';
import { ScrollAnimate } from '../../core/directives/scroll-animate';

@Component({
  selector: 'app-treatment-detail',
  imports: [RouterLink, ScrollAnimate],
  templateUrl: './treatment-detail.html',
  styles: ``
})
export class TreatmentDetail implements OnInit {
  treatment = signal<Treatment | undefined>(undefined);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.treatment.set(TREATMENTS.find(t => t.slug === slug));
  }

  getWhatsAppUrl(): string {
    const t = this.treatment();
    const text = t
      ? `Hola, me interesa el tratamiento de ${t.name}`
      : 'Hola, me gustaría pedir una cita';
    return `https://wa.me/34636942954?text=${encodeURIComponent(text)}`;
  }
}
