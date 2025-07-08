import { Component, signal, input, output, inject, OnInit } from '@angular/core';
import { BootstrapDarkMode } from '../../services/bootstrap-dark-mode.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme-button',
  imports: [
    FaIconComponent
  ],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.scss'
})
export class ThemeButton implements OnInit {
  protected readonly faSun = faSun;
  protected readonly faMoon = faMoon;

  private themeService = inject(BootstrapDarkMode);

  initialTheme = input<'light' | 'dark'>('light');
  themeChanged = output<'light' | 'dark'>();

  currentTheme = signal<'light' | 'dark'>(this.initialTheme());

  ngOnInit(): void {
    this.themeService.setTheme(this.initialTheme());
    this.currentTheme.set(this.themeService.getCurrentTheme());
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    const newTheme = this.themeService.getCurrentTheme();
    this.currentTheme.set(newTheme);
    this.themeChanged.emit(newTheme);
  }
}
