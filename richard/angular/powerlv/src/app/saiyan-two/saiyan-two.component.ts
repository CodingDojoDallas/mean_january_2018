import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyanTwo',
  templateUrl: './saiyanTwo.component.html',
  styleUrls: ['./saiyanTwo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class saiyanTwoComponent implements OnInit, OnChanges {
  @Input() power;  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power*150;
  }

}