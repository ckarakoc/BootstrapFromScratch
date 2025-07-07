import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { PricingCards } from './pricing-cards/pricing-cards';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'pricing-cards', component: PricingCards },
  { path: '**', component: PageNotFound },
];
