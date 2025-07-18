import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeLoaderService {
  private document: Document = inject(DOCUMENT);

  loadTheme(themeName: string): void {
    const existingLink = this.document.getElementById('theme-link') as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = `${ themeName }.css`;
      return;
    }

    const link = this.document.createElement('link');
    link.id = 'theme-link';
    link.rel = 'stylesheet';
    link.href = `${ themeName }.css`;
    this.document.head.appendChild(link);
  }
}
