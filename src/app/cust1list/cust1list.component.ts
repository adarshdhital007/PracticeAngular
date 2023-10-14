import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust1list',
  template: `
    <div class="customerList">
      <p class='custname'>
        Customers
      </p>
      <app-cust1 *ngFor="let customer of customerList" [customer]="customer" (clicked)="onCustomerClicked($event)"></app-cust1>
    </div>
  `,
  styles: [
    `
      .customerList {
        background-color: #80ced6;
        margin: 10px;
        padding: 10px;
      }
    `,
  ],
})
export class Cust1ListComponent implements OnInit {
  public customerList = [ 
    { name: 'Adarsh', city: 'Nepal' },
    { name: 'Fet', city: 'Nepal' },
    { name: 'Taylor', city: 'California' },
  ];

  constructor() { }

  ngOnInit() { }

  onCustomerClicked(customerName: string) {
    alert('Customer Clicked:' + customerName);
  }
}
