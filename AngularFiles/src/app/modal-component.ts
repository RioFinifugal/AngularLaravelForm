import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { SubmitService } from './submit.service';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <form #form (ngSubmit)="submitForm(fm)" #fm="ngForm">
      <div class="from-group">
        <label for="name">Item Name:</label>
        <input type="text" class="form-control" [(ngModel)]="name" name="name" id="name">
      </div>
      <div class="form-group">
        <label for="price">Item Price:</label>
        <input type="text" class="form-control" [(ngModel)]="price" name="price" id="price">
      </div>
      <br/>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})

//This is the content of the pop+ the submit function
export class NgbdModalContent {
  title = 'My Angular-Laravel App!';
  name = '';
  price = '';
  data: any[] = [];

  constructor(public activeModal: NgbActiveModal, private submitService: SubmitService, private http: HttpClient) {}

    //this is needed to submit the altered input in the DB
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

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: 'modal-component.html',
  styleUrls: ['./app.component.scss']
})


export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}
  
  //opens the pop up window for user to alter data
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }
}