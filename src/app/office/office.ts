import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';
import { RouterLink } from '@angular/router';
import { NgbCarousel, NgbCollapse, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleLeft, faArrowCircleRight, faChartBar, faChartPie, faCheck, faClock, faComments, faRocket, faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-office',
  imports: [
    RouterLink,
    NgbCollapse,
    FaIconComponent,
    NgbCarousel,
    NgbSlide
  ],
  templateUrl: './office.html',
  styleUrl: './office.scss'
})
export class Office implements OnInit, AfterViewInit {
  private themeLoader = inject(ThemeLoaderService);

  @ViewChild('stats') statsSection!: ElementRef;
  @ViewChildren('counter') counters!: QueryList<ElementRef>;

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

  ngAfterViewInit(): void {
    this.incrementStats();
  }

  incrementStats(): void {
    this.counters.forEach((counter: ElementRef, index: number) => {
      counter.nativeElement.innerText = 0;
      this.updateCounter(counter);
    });
  }

  private updateCounter(counter: ElementRef) {
    let target = parseInt(counter.nativeElement.getAttribute('data-target') || '0');
    let currentValue = parseInt(counter.nativeElement.innerText || '0');
    let increment = Math.ceil(target / 200);

    if (currentValue < target) {
      counter.nativeElement.innerText = (currentValue + increment).toString();
      setTimeout(() => this.updateCounter(counter), 10);
    } else {
      counter.nativeElement.innerText = target.toString();
    }
  }

  protected readonly faFacebook = faFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faPinterest = faPinterest;
  protected readonly faCheck = faCheck;
  protected readonly faRocket = faRocket;
  protected readonly faClock = faClock;
  protected readonly faComments = faComments;
  protected readonly faTools = faTools;
  protected readonly faChartPie = faChartPie;
  protected readonly faChartBar = faChartBar;
  protected readonly faArrowCircleLeft = faArrowCircleLeft;
  protected readonly faArrowCircleRight = faArrowCircleRight;

}
