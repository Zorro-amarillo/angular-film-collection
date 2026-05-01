import { Component, signal } from '@angular/core';
import { FilmCard } from '../../components/film-card/film-card';
import { Film } from '../../models/film';

import filmsData from '../../data/films.json';

@Component({
  selector: 'app-catalog',
  imports: [FilmCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  films = signal<Film[]>(filmsData);
}
