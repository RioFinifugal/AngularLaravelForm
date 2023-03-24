import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService 
{
  private apiUrl = 'http://your-laravel-api-endpoint'; // Replace with your Laravel API endpoint

  constructor(private http: HttpClient) {}

  updateRowData(id: number, submitData: any) {
    return this.http.put(`${this.apiUrl}s/${id}`, submitData);
  }
}
