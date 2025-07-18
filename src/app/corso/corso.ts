import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faAtom, faChartBar, faCircle, faHandshake, faKey, faNewspaper, faSquare, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NgbCarousel, NgbCollapse, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';

@Component({
  selector: 'app-corso',
  imports: [
    RouterLink,
    FaIconComponent,
    NgbCollapse,
    FaStackComponent,
    FaStackItemSizeDirective,
    NgbCarousel,
    NgbSlide
  ],
  templateUrl: './corso.html',
  styleUrl: './corso.scss'
})
export class Corso implements OnInit {
  imageUrlHeader: string = "assets/images/corso/header-background.jpg"
  imageUrlInvitation: string = "assets/images/corso/invitation-background.jpg"

  scrolled = signal<boolean>(false);
  isCollapsed = signal<boolean>(true);
  private themeLoader = inject(ThemeLoaderService);

  ngOnInit(): void {
    this.themeLoader.loadTheme('corso-bootstrap');
  }

  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
  }

  protected readonly faCircle = faCircle;
  protected readonly faFacebookF = faFacebookF;
  protected readonly faTwitter = faTwitter;
  protected readonly faSquare = faSquare;
  protected readonly faAtom = faAtom;
  protected readonly faKey = faKey;
  protected readonly faNewspaper = faNewspaper;
  protected readonly faUsers = faUsers;
  protected readonly faHandshake = faHandshake;
  protected readonly faChartBar = faChartBar;
  protected readonly faFacebook = faFacebook;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faInstagram = faInstagram;
  protected readonly faYoutube = faYoutube;
}
