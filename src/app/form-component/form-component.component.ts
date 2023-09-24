import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDataService } from './form-data.service'; // Import your FormDataService

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
})
export class FormComponentComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';

  constructor(private formDataService: FormDataService) { } // Inject FormDataService

  submit(login: NgForm) {

    if (!this.firstname || !this.lastname || !this.email || !this.password) {
      alert('Can\'t proceed without empty fields');
      return;
    }

    // Prepare form data to send to the server
    const formData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    };

    // Call the service method to send the data to the server
    this.formDataService.saveFormData(formData).subscribe(
      (response) => {
        console.log('Form data saved successfully', response);
        // Clear the form or perform any other necessary actions
        this.clearForm();
      },
      (error) => {
        console.error('Error saving form data', error);
      }
    );
  }

  onClick() {
    console.log("Hello man");
  }

  clearForm() {
    // Clear the form fields after successful submission
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
  }
}
