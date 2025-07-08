import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ThemeButton } from '../shared/components/theme-button/theme-button';
import { HttpClient } from '@angular/common/http';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  imports: [
    ThemeButton,
    NgbPopoverModule
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {
  private http: HttpClient = inject(HttpClient);

  users: any[] = []
  hobbies: string[] = [
    "Reading",
    "Writing",
    "Drawing",
    "Painting",
    "Photography",
    "Singing",
    "Dancing",
    "Playing guitar",
    "Playing piano",
    "Cooking",
    "Baking",
    "Hiking",
    "Camping",
    "Fishing",
    "Cycling",
    "Running",
    "Yoga",
    "Meditation",
    "Gardening",
    "Birdwatching",
    "Traveling",
    "Gaming",
    "Watching movies",
    "Watching series",
    "Blogging",
    "Coding",
    "Learning languages",
    "Solving puzzles",
    "Playing chess",
    "Collecting stamps",
    "Collecting coins",
    "Scrapbooking",
    "Knitting",
    "Crocheting",
    "DIY crafts",
    "Home decorating",
    "Model building",
    "Pet care",
    "Volunteering"
  ];


  ngOnInit(): void {
    this.http.get<any>('https://randomuser.me/api/?results=20').subscribe(res => {
      this.users = res.results.map((user: any) => ({
        ...user,
        hobbies: [this.getHobby(), this.getHobby(), this.getHobby()]
      }));
    });
  }

  getHobby(): string {
    return this.hobbies[Math.floor(Math.random() * this.hobbies.length)];
  }
}
