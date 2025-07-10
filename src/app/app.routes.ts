import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { PricingCards } from './pricing-cards/pricing-cards';
import { Ratings } from './ratings/ratings';
import { UserList } from './user-list/user-list';
import { Ebook } from './ebook/ebook';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'pricing-cards', component: PricingCards },
  { path: 'ratings', component: Ratings },
  { path: 'user-list', component: UserList },
  { path: 'ebook', component: Ebook },
  { path: '**', component: PageNotFound },
];
