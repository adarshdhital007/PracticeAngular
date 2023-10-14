import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './dark-mode.service'; 
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {} // Inject DarkModeService

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
  ngOnInit(): void {
    // this.darkModeService.enableDarkMode();
  }
}
