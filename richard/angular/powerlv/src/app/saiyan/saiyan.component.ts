import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaiyanComponent implements OnInit, OnChanges {
  @Input() power;  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power*10;
  }

}