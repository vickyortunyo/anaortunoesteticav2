import { Component, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  imports: [RouterLink],
  template: `
    @if (visible()) {
      <div class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-yellow-light shadow-lg p-4">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-text-body">
            Usamos cookies propias para el funcionamiento del sitio.
            <a routerLink="/cookies" class="text-gold-primary hover:text-gold-dark underline">Más info</a>
          </p>
          <button
            (click)="accept()"
            class="bg-gold-primary hover:bg-gold-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors shrink-0"
          >
            Aceptar
          </button>
        </div>
      </div>
    }
  `,
  styles: ``
})
export class CookieBanner implements OnInit {
  visible = signal(false);

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.visible.set(!localStorage.getItem('cookies_accepted'));
    }
  }

  accept() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookies_accepted', 'true');
    }
    this.visible.set(false);
  }
}
