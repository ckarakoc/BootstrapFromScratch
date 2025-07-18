import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { ThemeLoaderService } from '../shared/services/theme-loader-service';
import { RouterLink } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-office',
  imports: [
    RouterLink,
    NgbCollapse
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
  stopCounting = false;

  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
  }

  ngOnInit(): void {
    this.themeLoader.loadTheme('office-bootstrap');
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
}
