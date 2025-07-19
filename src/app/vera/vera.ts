import { AfterViewInit, Component, computed, ElementRef, inject, OnDestroy, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';
import { RouterLink } from '@angular/router';
import { NgbCollapse, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faChartBar, faCheck, faCircle, faCloud, faCog, faDesktop, faGlasses, faGraduationCap, faLightbulb, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-vera',
  imports: [
    RouterLink,
    NgbCollapse,
    FaIconComponent,
    FaStackComponent,
    FaStackItemSizeDirective
  ],
  templateUrl: './vera.html',
  styleUrl: './vera.scss'
})
export class Vera implements OnInit, AfterViewInit, OnDestroy {
  private themeLoader = inject(ThemeLoaderService);
  private modalService = inject(NgbModal);

  imageUrlHeader: string = "assets/images/vera/header-background.jpg";

  scrolled = signal<boolean>(false);
  isCollapsed = signal<boolean>(true);

  private words = ["Small Business", "Startups", "Enterprise"]
  wordIndex = signal<number>(0);
  currentWord = computed(() => this.words[this.wordIndex()]);

  private intervalId: any;

  @ViewChild('videoModal') videoModal!: ElementRef;
  @ViewChild('videoIFrame') videoIFrame!: ElementRef<HTMLIFrameElement>;

  ngOnInit(): void {
    this.themeLoader.loadTheme('vera-bootstrap');

    this.intervalId = setInterval(() => {
      this.wordIndex.update(i => (i + 1) % this.words.length);
    }, 3000);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
  }

  openProjectModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, size: 'xl' });
  }

  openModal(content: TemplateRef<any>, url: string) {
    const modalRef = this.modalService.open(content, { centered: true, size: 'xl' });

    // Wait a short delay to ensure the modal content (iframe) is in the DOM
    setTimeout(() => {
      if (this.videoIFrame?.nativeElement) {
        this.videoIFrame.nativeElement.setAttribute('src', url + '?autoplay=1&modestbranding=1&showinfo=0');
      }
    }, 0);

    modalRef.result.finally(() => {
      if (this.videoIFrame?.nativeElement) {
        this.videoIFrame.nativeElement.removeAttribute('src');
      }
    });
  }

  protected readonly faCircle = faCircle;
  protected readonly faFacebookF = faFacebookF;
  protected readonly faTwitter = faTwitter;
  protected readonly faCheck = faCheck;
  protected readonly faLightbulb = faLightbulb;
  protected readonly faDesktop = faDesktop;
  protected readonly faWifi = faWifi;
  protected readonly faCog = faCog;
  protected readonly faGlasses = faGlasses;
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly faChartBar = faChartBar;
  protected readonly faCloud = faCloud;
  protected readonly faPinterest = faPinterest;
  protected readonly faInstagram = faInstagram;
  protected readonly faFacebook = faFacebook;
}
