import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  currentPage = signal<string>('');

  setPage(value: string) {
    this.currentPage.set(value);
  }
}
