import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';

@Component({
  selector: 'app-ebook-contact',
  imports: [
    RouterLink,
    NgbCollapse,
    FaIconComponent
  ],
  templateUrl: './ebook-contact.html',
  styleUrl: './ebook-contact.scss'
})
export class EbookContact implements OnInit {
  scrolled = signal<boolean>(false);
  isCollapsed = signal<boolean>(true);

  imageUrlHeader: string = "assets/images/ebook/header-background.jpg";

  private themeLoader = inject(ThemeLoaderService);

  ngOnInit(): void {
    this.themeLoader.loadTheme('ebook-bootstrap');
  }

  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
  }

  protected readonly faFacebook = faFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faPinterest = faPinterest;
}
