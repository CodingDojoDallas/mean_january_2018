import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent implements OnInit {
     title = 'Retro Barcode Generator';
     colors : object[] =  [];

     ngOnInit(){
          for(let i = 0; i < 10; i++){
               let random = {random:'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)};
               this.colors.push(random)
          }
     }
}