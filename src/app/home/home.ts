import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  @ViewChild('frame', { static: false }) iframe!: ElementRef<HTMLIFrameElement>;
  currentFrameTitle = 'Home';

  changeIFrame(s: string) {
    this.iframe.nativeElement.src = `#${s}`;
    this.currentFrameTitle = s.slice(1);
  }

  get fullRoute(): string[] {
    return ['/', ...this.currentFrameTitle.split('/').map(s => s.toLowerCase())];
  }
}
