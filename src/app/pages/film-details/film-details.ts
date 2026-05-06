import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FilmService } from '../../services/film.service';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { DurationPipe } from '../../pipes/duration.pipe';
import { Film } from '../../models/film';

@Component({
  selector: 'app-film-details',
  imports: [DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails implements OnInit {
  private filmService = inject(FilmService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private breadcrumbsService = inject(BreadcrumbsService);

  filmId = Number(this.route.snapshot.paramMap.get('filmId'));
  currentFilm = this.filmService.getFilmById(this.filmId);

  ngOnInit(): void {
    if (!this.currentFilm) {
      this.router.navigate(['/404']);
      return;
    }

    this.breadcrumbsService.setPage(this.currentFilm.title);
  }
}
