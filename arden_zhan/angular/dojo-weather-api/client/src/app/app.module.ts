import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CityService } from './city/city.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CityNavComponent } from './city/city-nav/city-nav.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    PageNotFoundComponent,
    CityNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
