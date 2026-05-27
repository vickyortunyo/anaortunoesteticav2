import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimate implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
