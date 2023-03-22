import { Component } from '@angular/core';
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
  title = 'Your Title';
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
      },
      (error) => {
        console.error(error);
      }
    );
  }
}