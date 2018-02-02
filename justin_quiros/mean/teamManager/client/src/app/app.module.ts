import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerNewComponent } from './player/player-new/player-new.component';
import { PlayerListComponent } from './player/player-list/player-list.component';

import { DataService } from './player/data.service';
import { PlayerStatusComponent } from './player/player-status/player-status.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerNewComponent,
    PlayerListComponent,
    PlayerStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
