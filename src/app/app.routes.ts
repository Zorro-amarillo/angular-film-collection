import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { FilmDetails } from './pages/film-details/film-details';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Catalog,
  },
  {
    path: 'films/:filmId',
    component: FilmDetails,
  },
  {
    path: '**',
    component: NotFound,
  },
];
