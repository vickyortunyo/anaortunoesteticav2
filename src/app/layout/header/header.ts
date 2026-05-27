import { Component, HostListener, signal, computed } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class Header {
  mobileMenuOpen = signal(false);
  scrolled = signal(false);
  isHome = signal(true);

  solid = computed(() => this.scrolled() || !this.isHome());

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e) => {
        const nav = e as NavigationEnd;
        this.isHome.set(nav.urlAfterRedirects === '/');
      });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }
}
