import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteListComponent } from './quote/quote-list/quote-list.component';
import { QuoteNewComponent } from './quote/quote-new/quote-new.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteListComponent,
    QuoteNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
