import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-film-details',
  imports: [],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails implements OnInit {
  private filmService = inject(FilmService);
  private route = inject(ActivatedRoute);
  private breadcrumbsService = inject(BreadcrumbsService);

  filmId = Number(this.route.snapshot.paramMap.get('filmId'));
  currentFilm = this.filmService.getFilmById(this.filmId);

  ngOnInit(): void {
    if (this.currentFilm) {
      this.breadcrumbsService.setPage(this.currentFilm?.title);
    }
  }
}
