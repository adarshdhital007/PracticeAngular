import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './dark-mode.service'; 
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {} // Inject DarkModeService

  ngOnInit(): void {
    //this.darkModeService.enableDarkMode();
  }
}
