import { Component } from '@angular/core';

@Component({
  selector: 'app-privacidad',
  template: `
    <section class="pt-28 pb-16 bg-cream min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-heading text-4xl font-bold text-gold-primary mb-8">Política de Privacidad</h1>

        <div class="bg-white rounded-2xl shadow-[0_4px_20px_rgba(196,150,122,0.15)] p-8 space-y-6 text-text-body leading-relaxed">
          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Responsable del tratamiento</h2>
            <p>
              <strong>Titular:</strong> Ana Ortuño Estética<br>
              <strong>Dirección:</strong> C/ Isabel La Católica, 20, 03007 Alicante<br>
              <strong>Email:</strong> anaortuno.estetica&#64;gmail.com
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Finalidad del tratamiento</h2>
            <p>
              Los datos personales recabados a través del formulario de contacto serán tratados
              con la finalidad de atender su consulta y gestionar la relación con el cliente.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento del interesado
              al enviar el formulario de contacto, así como el interés legítimo del responsable.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Destinatarios</h2>
            <p>
              No se cederán datos a terceros, salvo obligación legal.
              Los datos del formulario se envían a través de EmailJS, servicio que actúa como encargado del tratamiento.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Derechos</h2>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión, oposición,
              limitación del tratamiento y portabilidad enviando un email a
              anaortuno.estetica&#64;gmail.com.
            </p>
          </div>

          <div>
            <h2 class="font-heading text-xl font-semibold text-gold-primary mb-3">Conservación de datos</h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para atender su consulta
              y durante los plazos legalmente establecidos.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class Privacidad {}
