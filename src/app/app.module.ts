import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './components/question-1/question1/question1.component';
import { Question2Component } from './components/question-2/question2/question2.component';
import { HttpClientModule } from '@angular/common/http';
import { MasterServiceService } from './services/master-service.service';


@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MasterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
