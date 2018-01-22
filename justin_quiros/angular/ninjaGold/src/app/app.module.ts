import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { HistoryComponent } from './history/history.component';

import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
