import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

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
export class EbookContact {
  scrolled = signal<boolean>(false);
  isCollapsed = signal<boolean>(true);

  imageUrlHeader: string = "assets/images/ebook/header-background.jpg";

  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
  }

  protected readonly faFacebook = faFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faPinterest = faPinterest;
}
