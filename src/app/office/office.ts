import { Component, inject, OnInit } from '@angular/core';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';

@Component({
  selector: 'app-office',
  imports: [],
  templateUrl: './office.html',
  styleUrl: './office.scss'
})
export class Office implements OnInit {
  private themeLoader = inject(ThemeLoaderService);

  ngOnInit(): void {
    this.themeLoader.loadTheme('office-bootstrap');
  }
}
