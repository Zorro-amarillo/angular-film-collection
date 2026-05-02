import { Component, inject } from '@angular/core';

import { FilmCard } from '../../components/film-card/film-card';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-catalog',
  imports: [FilmCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  private filmService = inject(FilmService);

  films = this.filmService.getFilms();
}
