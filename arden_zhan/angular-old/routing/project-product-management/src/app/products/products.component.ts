import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.products = this._dataService.retrieveProducts();
  }

  deleteProduct(id: number){
    this._dataService.removeProduct(id);
    this.products = this._dataService.retrieveProducts();
  }

}
