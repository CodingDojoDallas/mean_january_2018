import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { PowerLevelComponent } from './power/power-level/power-level.component';
import { BeingComponent } from './power/being/being.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    PowerLevelComponent,
    BeingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
