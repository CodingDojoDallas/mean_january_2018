import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { LogComponent } from './log/log.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
