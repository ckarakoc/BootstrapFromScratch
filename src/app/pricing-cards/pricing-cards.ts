import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-cards',
  imports: [],
  templateUrl: './pricing-cards.html',
  styleUrl: './pricing-cards.scss'
})
export class PricingCards {
  constructor(private title: Title) {
    this.title.setTitle('Pricing Cards');
  }
}
