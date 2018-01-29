import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SupersaiyanComponent } from './supersaiyan/supersaiyan.component';
import { SaiyanTwoComponent } from './saiyan-two/saiyan-two.component';
import { SaiyanThreeComponent } from './saiyan-three/saiyan-three.component';
import { SaiyanFourComponent } from './saiyan-four/saiyan-four.component';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SaiyanTwoComponent,
    SaiyanThreeComponent,
    SaiyanFourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
