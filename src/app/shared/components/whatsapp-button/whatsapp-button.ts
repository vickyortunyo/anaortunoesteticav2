import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  template: `
    <a
      href="https://wa.me/34636942954?text=Hola,%20me%20gustaría%20pedir%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <i class="ph-fill ph-whatsapp-logo text-3xl"></i>
    </a>
  `,
  styles: ``
})
export class WhatsappButton {}
