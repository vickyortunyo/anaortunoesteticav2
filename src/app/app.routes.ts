import { Routes } from '@angular/router';
import { Home } from './public/home/home';
import { Treatments } from './public/treatments/treatments';
import { TreatmentDetail } from './public/treatment-detail/treatment-detail';
import { Booking } from './public/booking/booking';
import { Contact } from './public/contact/contact';
import { AvisoLegal } from './public/legal/aviso-legal/aviso-legal';
import { Privacidad } from './public/legal/privacidad/privacidad';
import { Cookies } from './public/legal/cookies/cookies';
import { NotFound } from './public/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tratamientos', component: Treatments },
  { path: 'tratamientos/:slug', component: TreatmentDetail },
  { path: 'cita', component: Booking },
  { path: 'contacto', component: Contact },
  { path: 'aviso-legal', component: AvisoLegal },
  { path: 'privacidad', component: Privacidad },
  { path: 'cookies', component: Cookies },
  { path: '**', component: NotFound }
];
