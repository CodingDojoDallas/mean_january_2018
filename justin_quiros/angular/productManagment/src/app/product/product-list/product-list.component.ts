import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../../bootstrap.min.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  products = this._dataService.products

  deleteProd(id){

 	 	for(let i = 0; i < this._dataService.products.length; i++){
			if(this._dataService.products[i].id == id){
				this._dataService.products.splice(i, 1);
				console.log(this._dataService.products)
			}
		}
 	 }

  ngOnInit() {
  }

}
