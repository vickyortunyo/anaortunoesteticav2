import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TreatmentsService } from '../../core/services/treatments.service';
import { Treatment } from '../../public/treatments/treatments.data';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit, OnDestroy {
  treatments: Treatment[] = [];
  categories: any[] = [];
  private ts = inject(TreatmentsService);
  private auth = inject(Auth);
  private router = inject(Router);
  private sub?: Subscription;

  saving: Record<string, boolean> = {};
  saved: Record<string, boolean> = {};

  ngOnInit() {
    this.categories = this.ts.getCategories();
    this.sub = this.ts.getTreatments().subscribe(t => this.treatments = t);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  getTreatmentsByCategory(catId: string) {
    return this.treatments.filter(t => t.category === catId);
  }

  /** Valor numérico para el input (sin el símbolo €). */
  getPriceInput(price: string): string {
    return price.replace(/\s*€\s*$/i, '').trim();
  }

  onPriceInput(treatment: Treatment, value: string): void {
    const trimmed = value.trim();
    treatment.price = trimmed ? `${trimmed} €` : '';
  }

  private formatPriceForSave(price: string): string {
    const amount = this.getPriceInput(price);
    return amount ? `${amount} €` : '';
  }

  async savePrice(treatment: Treatment) {
    this.saving[treatment.slug] = true;
    this.saved[treatment.slug] = false;
    try {
      treatment.price = this.formatPriceForSave(treatment.price);
      await this.ts.updatePrice(treatment.slug, treatment.price);
      this.saved[treatment.slug] = true;
      setTimeout(() => this.saved[treatment.slug] = false, 2000);
    } catch (e) {
      console.error('Error real al guardar precio:', e);
      alert('Error al guardar el precio');
    } finally {
      this.saving[treatment.slug] = false;
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}
