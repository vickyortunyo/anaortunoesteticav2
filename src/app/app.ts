import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { WhatsappButton } from './shared/components/whatsapp-button/whatsapp-button';
import { ScrollToTop } from './shared/components/scroll-to-top/scroll-to-top';
import { CookieBanner } from './shared/components/cookie-banner/cookie-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsappButton, ScrollToTop, CookieBanner],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
    <app-scroll-to-top />
    <app-cookie-banner />
  `,
  styles: `
    main {
      min-height: 100vh;
    }
  `
})
export class App {}
