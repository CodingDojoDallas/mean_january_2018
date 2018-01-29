import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './player/player.service';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerCreateComponent } from './player/player-create/player-create.component';
import { StatusComponent } from './status/status.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerListComponent,
    PlayerCreateComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule

  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
