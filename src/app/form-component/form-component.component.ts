import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  submit(login: NgForm) { 
    console.log("Form Submitted");
    console.log("NgForm Object:", login); 
  }

  onClick() {
    console.log("Hello man");
  }
}
