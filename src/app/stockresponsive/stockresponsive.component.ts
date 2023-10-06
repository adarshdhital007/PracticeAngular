import { Component } from '@angular/core';

@Component({
  selector: 'app-stockresponsive',
  templateUrl: './stockresponsive.component.html',
  styleUrls: ['./stockresponsive.component.css']
})
export class StockresponsiveComponent {
  stocks = [
    {
      src: 'assets/images/facebook.png',
      name: 'Facebook Inc.',
      price: 160.25,     
      change: 1.25,
      marketCap: '2.5T',
      dividendYield: 1.50,
      volume: '10.2M',
    },
    {
      src: 'assets/images/microsoft.png',
      name: 'Microsoft Corporation',
      price: 305.00,    
      change: -0.80,
      marketCap: '2.0T',
      dividendYield: 1.75,
      volume: '8.5M',
    },
    {
      src: 'assets/images/google.png',
      name: 'Google Inc.',
      price: 145.50,    
      change: 15.30,
      marketCap: '2.1T',
      dividendYield: 0.80,
      volume: '3.6M',
    },
    
  ];


  constructor() { }
}
