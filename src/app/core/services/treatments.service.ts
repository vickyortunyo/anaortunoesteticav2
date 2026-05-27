import { Injectable, inject } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { TREATMENTS, Treatment, CATEGORIES } from '../../public/treatments/treatments.data';

import {
  Firestore,
  collection,
  doc,
  setDoc,
  collectionData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  private firestore = inject(Firestore);

  private pricesCollection = collection(this.firestore, 'prices');

  private prices$ = collectionData(
    this.pricesCollection,
    { idField: 'id' }
  ) as Observable<{ id: string; price?: string }[]>;

  getCategories() {
    return CATEGORIES;
  }

  getTreatments(): Observable<Treatment[]> {
    return this.prices$.pipe(
      map(prices => {

        const priceMap = new Map<string, string>();

        for (const p of prices) {
          if (typeof p.price === 'string') {
            priceMap.set(p.id, p.price);
          }
        }

        return TREATMENTS.map(t => ({
          ...t,
          price: priceMap.get(t.slug) ?? t.price
        }));
      }),
      catchError(err => {
        console.error(err);
        return of(TREATMENTS);
      })
    );
  }

  async updatePrice(slug: string, newPrice: string): Promise<void> {

    const priceDoc = doc(
      this.firestore,
      `prices/${slug}`
    );

    await setDoc(
      priceDoc,
      { price: newPrice },
      { merge: true }
    );
  }
}