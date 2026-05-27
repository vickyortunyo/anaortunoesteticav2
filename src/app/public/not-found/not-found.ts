import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div class="text-center px-4">
        <h1 class="font-heading text-6xl font-bold text-gold-primary mb-4">404</h1>
        <h2 class="font-heading text-2xl font-semibold text-text-body mb-6">Página no encontrada</h2>
        <p class="text-text-body mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <a
          routerLink="/"
          class="inline-block bg-gold-primary hover:bg-gold-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </section>
  `,
  styles: ``
})
export class NotFound {}
