import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {
  @Input() delay: number = 20; // Default delay value of 2000 milliseconds

  ngAfterContentInit() {
   
  }
}
