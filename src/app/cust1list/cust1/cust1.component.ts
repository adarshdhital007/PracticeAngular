import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cust1',
  template: `
    <div class='customer' (click)="onClicked()">
      {{ customer.name }} | {{ customer.city }}
    </div>
  `,
  styles: [
    `
      .customer {
        background-color: #fefbd8;
        margin: 10px;
        padding: 10px;
        cursor: pointer; 
      }
    `,
  ],
})
export class Cust1Component implements OnInit {
  @Input() customer!: { name: string; city: string };
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  onClicked() {
    this.clicked.emit(this.customer.name);
  }
}