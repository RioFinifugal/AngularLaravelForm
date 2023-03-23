import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdModalComponent, NgbdModalContent } from './modal-component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdModalComponent, 
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule, 

  ],
  providers: [],
  entryComponents: [NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
