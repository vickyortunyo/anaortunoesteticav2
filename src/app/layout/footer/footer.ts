import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class Footer {
  currentYear = new Date().getFullYear();
}
