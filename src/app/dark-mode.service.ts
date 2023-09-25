import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkModeStyles();
  }

  enableDarkMode() {
    this.isDarkMode = true;
    this.applyDarkModeStyles();
  }

  private applyDarkModeStyles() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
