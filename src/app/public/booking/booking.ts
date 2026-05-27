import { Component, signal, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ScrollAnimate } from '../../core/directives/scroll-animate';

@Component({
  selector: 'app-booking',
  imports: [ScrollAnimate],
  templateUrl: './booking.html',
  styles: ``
})
export class Booking implements OnInit, OnDestroy {
  calendarUrl!: SafeResourceUrl;
  rawCalendarUrl = environment.googleCalendarUrl;
  iframeLoaded = signal(false);
  private observer?: IntersectionObserver;

  @ViewChild('iframeContainer', { static: true }) iframeContainer!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.calendarUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawCalendarUrl);
    this.iframeLoaded.set(true);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
