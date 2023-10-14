import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-adarsh',
  templateUrl: './ng-adarsh.component.html',
  styleUrls: ['./ng-adarsh.component.css']
})
export class NgAdarshComponent {
  currentDate: Date = new Date();
  location: string = 'My Room';
  price: number = 19.99;
  temperature: number = 25.48981273509146;
  message: string = 'Hello, fellas!';
  amount: number = 12345.6789;
  isDiscounted: boolean = false;

  // Custom pipe parameter
  discountPercentage: number = 10;
  discountApplied: boolean = false;
  discountedPrice: number | null = null; // Initialize to null
  discountedPriceFormatted: string = '';

  // <!-- Display temperature in Fahrenheit or Celsius based on isFahrenheit -->
  // isFahrenheit: boolean = true;
  // <p>Temperature: {{ temperature | number:'1.1-1' }} {{ isFahrenheit ? '°F' : '°C' }}</p>
  
  // <!-- Button to toggle temperature unit -->
  // <button (click)="toggleTemperatureUnit()">Toggle Temperature Unit</button>
  

  // // Function to toggle temperature unit
  // toggleTemperatureUnit() {
  //   this.isFahrenheit = !this.isFahrenheit;
  // }


  // Function to calculate the discounted price
  calculateDiscountedPrice(price: number): number {
    if (this.isDiscounted) {
      const discountAmount = (price * this.discountPercentage) / 100;
      return price - discountAmount;
    } else {
      return price;
    }
  }
  calculateDiscountAmount(price: number): number {
    if (this.isDiscounted) {
      return price - this.calculateDiscountedPrice(price);
    } else {
      return 0;
    }
  }
  updateDiscountedPriceFormatted() {
    const discountedPrice = this.calculateDiscountedPrice(this.price);
    this.discountedPriceFormatted = this.isDiscounted
      ? discountedPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      : this.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  // Function to toggle discount
   toggleDiscount() {
    if (!this.discountApplied) {
      // Apply the discount if it's not applied
      this.isDiscounted = true;
      this.discountedPrice = this.calculateDiscountedPrice(this.price);
      this.discountApplied = true;
    }
    this.updateDiscountedPriceFormatted();
  }
}
