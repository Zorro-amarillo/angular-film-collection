import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Breadcrumbs } from './layout/breadcrumbs/breadcrumbs';
import { Catalog } from './pages/catalog/catalog';
import { FilmDetails } from './pages/film-details/film-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Breadcrumbs, Catalog, FilmDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-film-collection');
}
