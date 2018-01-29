import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private _dataService: DataService, private _route: ActivatedRoute) { 
  	this.products = this._dataService.products;
  }

  ngOnInit() {
  }
  
  deleteProduct(prod){
  	this._dataService.deleteProduct(prod);
  }

}
