import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyanThree',
  templateUrl: './ssaiyanThree.component.html',
  styleUrls: ['./saiyanThree.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaiyanThreeComponent implements OnInit, OnChanges {
  @Input() power;  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power*250;
  }

}