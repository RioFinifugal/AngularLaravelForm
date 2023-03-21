import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubmitService } from './submit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Your Title';
  name = '';
  price = '';

  constructor(private submitService: SubmitService) {}

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