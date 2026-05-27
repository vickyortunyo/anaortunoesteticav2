import { Component, signal, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScrollAnimate } from '../../core/directives/scroll-animate';

@Component({
  selector: 'app-contact',
  imports: [ScrollAnimate],
  templateUrl: './contact.html',
  styles: ``
})
export class Contact implements OnInit, OnDestroy {
  mapLoaded = signal(false);
  currentDay = new Date().getDay();

  isDayActive(...days: number[]): boolean {
    return days.includes(this.currentDay);
  }
  mapUrl!: SafeResourceUrl;
  mapCampelloUrl!: SafeResourceUrl;
  private observer?: IntersectionObserver;

  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  private readonly MAPS_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.5!2d-0.495437!3d38.3413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623648d6ecb211%3A0x4c8b68d4ccb4e952!2sGROW+Peluqueros+y+Estilistas!5e0!3m2!1ses!2ses!4v1709812813303!5m2!1ses!2ses';
  private readonly MAPS_CAMPELLO_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.160459656791!2d-0.39757242356770826!3d38.42931097182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236c8971d2883%3A0x4fb477906c1be8bd!2sAv.%20d\'Ausi%C3%A0s%20March%2C%2030%2C%2003560%20El%20Campello%2C%20Alicante!5e0!3m2!1ses!2ses!4v1709812813303!5m2!1ses!2ses';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.MAPS_URL);
    this.mapCampelloUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.MAPS_CAMPELLO_URL);

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.mapLoaded.set(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.mapContainer.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
