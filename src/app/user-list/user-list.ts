import { Component } from '@angular/core';
import { ThemeButton } from '../shared/components/theme-button/theme-button';

@Component({
  selector: 'app-user-list',
  imports: [
    ThemeButton
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList {
}
