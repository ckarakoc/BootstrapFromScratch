import { Component, inject, output, signal } from '@angular/core';
import { BootstrapDarkMode } from '../../services/bootstrap-dark-mode.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme-button',
  imports: [
    FaIconComponent
  ],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.scss'
})
export class ThemeButton {
  protected readonly faSun = faSun;
  protected readonly faMoon = faMoon;

  private themeService = inject(BootstrapDarkMode);
  themeChanged = output<'light' | 'dark'>();
  currentTheme = signal<'light' | 'dark'>(this.themeService.getCurrentTheme());


  toggleTheme(): void {
    this.themeService.toggleTheme();
    const newTheme = this.themeService.getCurrentTheme();
    this.currentTheme.set(newTheme);
    this.themeChanged.emit(newTheme);
  }
}
