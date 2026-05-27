import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html'
})
export class Login {
  email = '';
  password = '';
  error = '';
  loading = false;
  private auth = inject(Auth);
  private router = inject(Router);

  async onSubmit() {
    if (!this.email || !this.password) return;
    this.loading = true;
    this.error = '';
    try {
      await signInWithEmailAndPassword(this.auth, this.email, this.password);
      this.router.navigate(['/admin']);
    } catch (e: any) {
      this.error = 'Correo o contraseña incorrectos.';
    } finally {
      this.loading = false;
    }
  }
}
