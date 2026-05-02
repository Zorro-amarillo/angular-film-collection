import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  imports: [],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  private filmService = inject(FilmService);
  private route = inject(ActivatedRoute);

  filmId = Number(this.route.snapshot.paramMap.get('filmId'));
  currentFilm = this.filmService.getFilmById(this.filmId);
}
