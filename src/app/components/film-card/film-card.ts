import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  private filmService = inject(FilmService);

  film = input.required<Film>();
  toggleFav = output<number>();

  onToggleFavorite() {
    this.filmService.toggleFavorite(this.film().id);
  }
}
