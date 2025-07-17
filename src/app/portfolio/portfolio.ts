import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  faBook,
  faBuilding,
  faCalendar,
  faCheck,
  faChevronDown,
  faClock,
  faCode,
  faEnvelope,
  faGlobe, faGraduationCap,
  faHome,
  faProjectDiagram,
  faShoppingCart,
  faUser,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDribbble, faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portfolio',
  imports: [
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements AfterViewInit {
  imageUrlHeader: string = "assets/images/portfolio/intro-bg.jpg";
  imageUrlServices: string = "assets/images/portfolio/bg.jpg";

  @ViewChildren('typingTextEffectId') typingElements!: QueryList<ElementRef>;
  @ViewChild('jobDescription') jobDescription!: ElementRef;

  ngAfterViewInit(): void {
    this.runTypingEffect().then(r => {
      console.log("The run Typing Effect removes all inner HTML tags, so beware!")
      const text = this.jobDescription.nativeElement.textContent || '';
      const parts = text.split('|');

      const coloredPart = `<span style="color: #cc005f; font-weight: bold;">${ parts[1] }</span>`;

      this.jobDescription.nativeElement.innerHTML = `${ parts[0] } | ${ coloredPart }`;
    });
  }

  protected async runTypingEffect() {
    for (const typingElement of this.typingElements.toArray()) {
      typingElement.nativeElement.style.opacity = '0';
    }

    for (const typingElement of this.typingElements.toArray()) {
      const text = typingElement.nativeElement.textContent;
      typingElement.nativeElement.style.opacity = '1';

      const maxDelay = 100;
      const minDelay = 20;

      const calculatedDelay = 2000 / text.length;
      const typingDelay = Math.min(Math.max(minDelay, calculatedDelay), maxDelay);

      await this.typeText(text, typingElement.nativeElement, typingDelay);
    }
  }

  private typeText(text: string, typingElement: HTMLElement, delay: number): Promise<void> {
    return new Promise((resolve) => {
      if (!text || !typingElement) {
        return resolve();
      }
      let i = 0;
      typingElement.textContent = text[i];

      const interval = setInterval(() => {
        i++;

        if (i === text.length) {
          clearInterval(interval);
          return resolve();
        }

        typingElement.textContent += text[i];
      }, delay);
    });
  }

  protected readonly faUser = faUser;
  protected readonly faCalendar = faCalendar;
  protected readonly faBuilding = faBuilding;
  protected readonly faHome = faHome;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faCheck = faCheck;
  protected readonly faGlobe = faGlobe;
  protected readonly faCode = faCode;
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faChevronDown = faChevronDown;
  protected readonly faTwitter = faTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faFacebook = faFacebook;
  protected readonly faYoutube = faYoutube;
  protected readonly faGithub = faGithub;
  protected readonly faUsers = faUsers;
  protected readonly faProjectDiagram = faProjectDiagram;
  protected readonly faClock = faClock;
  protected readonly faBook = faBook;
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly faDribbble = faDribbble;
}
