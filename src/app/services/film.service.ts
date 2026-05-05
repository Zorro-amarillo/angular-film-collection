import { Injectable, signal, Signal } from '@angular/core';

import { Film } from '../models/film';

import filmsData from '../data/films.json';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  films = signal<Film[]>(filmsData);

  getFilms(): Signal<Film[]> {
    return this.films;
  }

  getFilmById(id: number): Film | undefined {
    const allFilms = this.films();

    return allFilms.find((film) => film.id === id);
  }

  toggleFavorite(id: number) {
    this.films.update((currentFilms) => {
      return currentFilms.map((film) => {
        if (film.id === id) {
          return {
            ...film,
            isFavorite: !film.isFavorite,
          };
        }

        return film;
      });
    });
  }
}
