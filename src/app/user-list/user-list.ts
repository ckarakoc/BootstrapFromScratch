import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    this.loadScript();
  }

  loadScript() {
    // if (document.getElementById('darkmode-toggle-script')) {
    //   console.log('Script already loaded');
    //   return;
    // }

    const script = this.renderer.createElement('script');
    script.id = 'darkmode-toggle-script';
    script.src = 'assets/js/darkmodetoggle.js';
    script.type = 'text/javascript';
    script.onload = () => console.log('Dark Mode Script loaded dynamically');
    script.onerror = () => console.error('Error loading Dark Mode Script');

    this.renderer.appendChild(this.document.body, script);
  }
}
