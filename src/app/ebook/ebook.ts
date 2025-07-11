import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDollarSign, faRocket, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ebook',
  imports: [
    RouterLink,
    FaIconComponent,
  ],
  templateUrl: './ebook.html',
  styleUrl: './ebook.scss'
})
export class Ebook {
  protected readonly faUser = faUser;
  protected readonly faRocket = faRocket;
  protected readonly faDollarSign = faDollarSign;

  scrolled = signal<boolean>(false);

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
  }
}
