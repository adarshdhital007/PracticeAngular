import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  // Method to send form data to the server
  saveFormData(formData: any): Observable<any> {
    const apiUrl = `${this.baseUrl}/api/formdata`; 

    return this.http.post(apiUrl, formData);
  }
}
