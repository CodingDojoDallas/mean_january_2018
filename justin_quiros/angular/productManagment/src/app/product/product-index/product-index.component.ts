import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css', '../../bootstrap.min.css']
})
export class ProductIndexComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}
