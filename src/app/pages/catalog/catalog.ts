import { Component } from '@angular/core';
import { FilmCard } from '../../components/film-card/film-card';

@Component({
  selector: 'app-catalog',
  imports: [FilmCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {}
