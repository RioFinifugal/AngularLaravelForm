import {Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubmitService } from './submit.service';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit   
{
  title = 'My Angular-Laravel App!';
  name = '';
  price = '';
  data: any[] = [];

  constructor(private submitService: SubmitService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.http.get('http://127.0.0.1:8000/api/submits').subscribe((response: any) => {
      this.data = response;
    });
  }
  submitForm(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const formData = {
      name: this.name,
      price: this.price,
    };

    this.submitService.submitForm(formData).subscribe(
      (response) => {
        console.log(response);
        form.resetForm();
        this.getData(); // Fetch data after submitting the form
      },
      (error) => {
        console.error(error);
      }
    );
    
  }
  onModalSubmit(updatedRow: any) {
    console.log('Received updatedRow:', updatedRow);
    // Find the index of the row in the data array
    const index = this.data.findIndex(row => row.id === updatedRow.id);
  
    // Update the row data in the array
    this.data[index] = updatedRow;
  
    // Send the updated row data to the Lavender backend to update the PostgreSQL table
    // Replace this with the actual API call to your Lavender backend
    this.submitService.updateSubmit(updatedRow.id, updatedRow).subscribe(
      (response: any) => {
        console.log('Row updated successfully:', response);
      },
      (error) => {
        console.error('Error updating row:', error);
      }
    );
  }
  deleteRow(id: number) {
    this.submitService.deleteSubmit(id).subscribe(
      (response) => {
        console.log(response);
        this.getData(); // Fetch data after deleting a row
      },
      (error) => {
        console.error(error);
      }
    );
  }
}