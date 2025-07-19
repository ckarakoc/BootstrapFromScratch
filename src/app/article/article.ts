import { Component, ElementRef, inject, OnInit, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterLink } from '@angular/router';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article',
  imports: [
    FaIconComponent,
    RouterLink,
    NgbCollapse
  ],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article implements OnInit {

  private themeLoader = inject(ThemeLoaderService);

  scrolled = signal<boolean>(false);
  isCollapsed = signal<boolean>(true);
  toTopButtonVisible = signal<boolean>(false);

  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
    this.toTopButtonVisible.set(window.scrollY > 50);
  }

  ngOnInit(): void {
    this.themeLoader.loadTheme('office-bootstrap');
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.toTopButtonVisible.set(false);
  }

  protected readonly faPinterest = faPinterest;
  protected readonly faInstagram = faInstagram;
  protected readonly faTwitter = faTwitter;
  protected readonly faFacebook = faFacebook;
  protected readonly faCheck = faCheck;
}
