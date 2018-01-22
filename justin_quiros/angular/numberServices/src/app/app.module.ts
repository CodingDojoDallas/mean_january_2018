import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';

import { DataService } from './data.service';
import { GamaComponent } from './gama/gama.component'

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    GamaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
