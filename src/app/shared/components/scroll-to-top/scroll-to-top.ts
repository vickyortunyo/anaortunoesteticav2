import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  template: `
    @if (visible()) {
      <button
        (click)="scrollToTop()"
        class="fixed bottom-24 right-6 z-40 bg-gold-primary hover:bg-gold-dark text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Volver arriba"
      >
        <i class="ph ph-arrow-up text-xl"></i>
      </button>
    }
  `,
  styles: ``
})
export class ScrollToTop {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.visible.set(window.scrollY > 400);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
