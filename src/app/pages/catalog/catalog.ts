import { Component, inject, OnInit, signal, computed } from '@angular/core';

import { FilmCard } from '../../components/film-card/film-card';
import { FilmService } from '../../services/film.service';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { Autofocus } from '../../directives/autofocus';

@Component({
  selector: 'app-catalog',
  imports: [FilmCard, Autofocus],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
  private filmService = inject(FilmService);
  private breadcrumbsService = inject(BreadcrumbsService);

  films = this.filmService.getFilms();

  searchInput = signal<string>('');
  foundFilms = computed(() => {
    const textInput = this.searchInput().toLowerCase().trim();

    if (!textInput) {
      return this.films();
    }

    return this.films().filter((film) => film.title.toLowerCase().includes(textInput));
  });

  ngOnInit(): void {
    this.breadcrumbsService.setPage('');
  }

  onTextInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchInput.set(input.value);
  }
}
