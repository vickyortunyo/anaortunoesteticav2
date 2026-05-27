import { Component } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  template: `
    <section class="pt-28 pb-16 bg-cream min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-heading text-4xl font-bold text-gold-primary mb-8">Aviso Legal</h1>

        <div class="bg-white rounded-2xl shadow-[0_4px_20px_rgba(196,150,122,0.15)] p-8 space-y-6 text-text-body leading-relaxed">
          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Datos identificativos</h2>
            <p>
              <strong>Titular:</strong> Ana Ortuño Estética<br>
              <strong>Dirección:</strong> C/ Isabel La Católica, 20, 03007 Alicante<br>
              <strong>Email:</strong> anaortuno.estetica&#64;gmail.com<br>
              <strong>Teléfono:</strong> +34 636 94 29 54
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Objeto</h2>
            <p>
              El presente sitio web tiene como finalidad dar a conocer los servicios de estética ofrecidos
              por Ana Ortuño Estética y facilitar el contacto con sus clientes.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos y diseño gráfico,
              son propiedad de Ana Ortuño Estética o cuenta con autorización para su uso.
              Queda prohibida su reproducción, distribución o transformación sin autorización expresa.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Limitación de responsabilidad</h2>
            <p>
              Ana Ortuño Estética no se hace responsable de los daños que pudieran derivarse del acceso
              o uso del sitio web, incluyendo posibles errores u omisiones en los contenidos.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Legislación aplicable</h2>
            <p>
              El presente aviso legal se rige por la legislación española vigente.
              Para cualquier controversia, las partes se someten a los juzgados y tribunales de Alicante.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class AvisoLegal {}
