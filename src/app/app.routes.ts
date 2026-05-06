import { Routes } from '@angular/router';

import { Catalog } from './pages/catalog/catalog';
import { FilmDetails } from './pages/film-details/film-details';
import { NotFound } from './pages/not-found/not-found';
import { About } from './pages/about/about';

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
    path: 'about',
    component: About,
  },
  {
    path: '404',
    component: NotFound,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
