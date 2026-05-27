import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  template: `
    <section class="pt-28 pb-16 bg-cream min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-heading text-4xl font-bold text-gold-primary mb-8">Política de Cookies</h1>

        <div class="bg-white rounded-2xl shadow-[0_4px_20px_rgba(196,150,122,0.15)] p-8 space-y-6 text-text-body leading-relaxed">
          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo al visitar
              un sitio web. Se utilizan para recordar preferencias y mejorar la experiencia de navegación.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Cookies que utilizamos</h2>
            <p>
              Este sitio web utiliza únicamente cookies propias y técnicas necesarias para el
              funcionamiento del sitio:
            </p>
            <ul class="list-disc pl-6 mt-2 space-y-1">
              <li><strong>cookies_accepted:</strong> Almacena su preferencia sobre el aviso de cookies (localStorage).</li>
            </ul>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Cookies de terceros</h2>
            <p>
              Este sitio web puede incluir contenido incrustado de terceros (Google Maps, Google Calendar)
              que pueden establecer sus propias cookies. Le recomendamos consultar las políticas de
              privacidad de dichos servicios.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Gestión de cookies</h2>
            <p>
              Puede configurar su navegador para rechazar todas las cookies o para que le avise
              cuando se envía una cookie. Sin embargo, algunas funciones del sitio podrían no
              funcionar correctamente sin cookies.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Más información</h2>
            <p>
              Si tiene dudas sobre nuestra política de cookies, puede contactarnos en
              anaortuno.estetica&#64;gmail.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class Cookies {}
