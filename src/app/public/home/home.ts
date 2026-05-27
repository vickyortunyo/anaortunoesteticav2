import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from '../treatments/treatments.data';
import { ScrollAnimate } from '../../core/directives/scroll-animate';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ScrollAnimate],
  templateUrl: './home.html',
  styles: ``
})
export class Home {
  categories = CATEGORIES;

  testimonials = [
    {
      name: 'María L.',
      treatment: 'Higiene Facial',
      text: 'Un trato increíble y unos resultados espectaculares. Mi piel nunca había estado tan bien.',
      stars: 5
    },
    {
      name: 'Laura G.',
      treatment: 'Manicura Semipermanente',
      text: 'Siempre salgo encantada. Ana es una profesional que cuida cada detalle.',
      stars: 5
    },
    {
      name: 'Carmen R.',
      treatment: 'Maderoterapia',
      text: 'Se nota mucho el cambio desde la primera sesión. Muy recomendable.',
      stars: 5
    }
  ];
}
