import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
    '.block1 {background-color:green;margin:10px;padding:10px;}',
    '.block2 {background-color:red;margin:10px;padding:10px;}',
    '.block3 {background-color:blue;margin:10px;padding:10px;}'
  ]
})
export class LayoutComponent {
  selection = 'name';
  options = ['name', 'address', 'other'];
}



