import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootstrapDarkMode {
  private readonly themeKey = 'bs-theme';

  constructor() {
    this.setTheme(this.getCurrentTheme());
  }

  getCurrentTheme(): 'light' | 'dark' {
    return (localStorage.getItem(this.themeKey) as 'light' | 'dark') || 'light';
  }

  setTheme(theme: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(this.themeKey, theme);
  }

  toggleTheme(): void {
    const newTheme = this.getCurrentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}
