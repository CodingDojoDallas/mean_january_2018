import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GenSeq1Component } from './gen-seq1/gen-seq1.component';
import { GenSeq2Component } from './gen-seq2/gen-seq2.component';
import { GenDiffComponent } from './gen-diff/gen-diff.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    GenSeq1Component,
    GenSeq2Component,
    GenDiffComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
