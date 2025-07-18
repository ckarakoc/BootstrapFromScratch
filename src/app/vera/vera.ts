import { Component, inject, OnInit } from '@angular/core';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';

@Component({
  selector: 'app-vera',
  imports: [],
  templateUrl: './vera.html',
  styleUrl: './vera.scss'
})
export class Vera implements OnInit{
  private themeLoader = inject(ThemeLoaderService);

  ngOnInit(): void {
    this.themeLoader.loadTheme('vera-bootstrap');
  }
}
