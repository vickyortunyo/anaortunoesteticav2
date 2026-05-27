import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  send(templateParams: Record<string, string>): Promise<void> {
    return emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams,
      environment.emailjs.publicKey
    ).then(() => {});
  }
}
