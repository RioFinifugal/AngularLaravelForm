import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  private apiUrl = 'http://localhost:8000/api/submit';

  constructor(private http: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  getYourData() {
    return this.http.get('http://localhost:8000/api/submit');
  }
}