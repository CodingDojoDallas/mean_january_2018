import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
