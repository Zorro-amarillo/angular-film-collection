import { Component, inject, OnInit } from '@angular/core';

import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  private breadcrumbsService = inject(BreadcrumbsService);

  ngOnInit(): void {
    this.breadcrumbsService.setPage('About');
  }
}
