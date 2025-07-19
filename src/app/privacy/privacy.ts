import { Component, computed, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";
import { faFacebook, faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';
import { NgbCollapse, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-privacy',
  imports: [
    FaIconComponent,
    RouterLink,
    FaStackComponent,
    FaStackItemSizeDirective,
    NgbCollapse
  ],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss'
})
export class Privacy implements OnInit {
  private themeLoader = inject(ThemeLoaderService);

  scrolled = signal<boolean>(false);
  isCollapsed = signal<boolean>(true);

  ngOnInit(): void {
    this.themeLoader.loadTheme('vera-bootstrap');
  }

  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
  }

  protected readonly faTwitter = faTwitter;
  protected readonly faPinterest = faPinterest;
  protected readonly faInstagram = faInstagram;
  protected readonly faFacebook = faFacebook;
  protected readonly faFacebookF = faFacebookF;
  protected readonly faCircle = faCircle;
  protected readonly faCheck = faCheck;
}
