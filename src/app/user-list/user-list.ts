import { Component, inject } from '@angular/core';
import { BootstrapDarkMode } from '../shared/services/bootstrap-dark-mode.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList {
  private darkModeService = inject(BootstrapDarkMode)

  setModeToDark() {
    this.darkModeService.setTheme('dark');
  }

  setModeToLight() {
    this.darkModeService.setTheme('light');
  }
}
