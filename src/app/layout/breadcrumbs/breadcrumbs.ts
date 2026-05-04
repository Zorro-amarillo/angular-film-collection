import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private breadcrumbsService = inject(BreadcrumbsService);

  nestedPage = this.breadcrumbsService.currentPage;
}
