import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ratings',
  imports: [FontAwesomeModule],
  templateUrl: './ratings.html',
  styleUrl: './ratings.scss'
})
export class Ratings {
  faStar = faStar;
  faSearch = faSearch;

  constructor(private title: Title) {
    this.title.setTitle('Ratings');
  }

}
