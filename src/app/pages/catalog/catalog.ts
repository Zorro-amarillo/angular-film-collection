import { Component, inject, OnInit } from '@angular/core';

import { FilmCard } from '../../components/film-card/film-card';
import { FilmService } from '../../services/film.service';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-catalog',
  imports: [FilmCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
  private filmService = inject(FilmService);
  private breadcrumbsService = inject(BreadcrumbsService);

  films = this.filmService.getFilms();

  ngOnInit(): void {
    this.breadcrumbsService.setPage('');
  }
}
