import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust1list',
  template: `
    <div class="customerList">
      <p>
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
  public customerList = [ // Change private to public here
    { name: 'Brian', city: 'Atlanta' },
    { name: 'Peter', city: 'San Francisco' },
    { name: 'Janet', city: 'Colorado' },
  ];

  constructor() { }

  ngOnInit() { }

  onCustomerClicked(customerName: string) {
    alert('Customer Clicked:' + customerName);
  }
}
