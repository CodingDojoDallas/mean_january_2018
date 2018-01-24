import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css', '../../bootstrap.min.css']
})
export class ProductEditComponent implements OnInit {

  product = new Product();

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { 
	    this._route.paramMap.subscribe( params => {
			let id = params.get('id');

			for(let i = 0; i < _dataService.products.length; i++){
				if(this._dataService.products[i].id == id){
					this.product = this._dataService.products[i]
				}

				// console.log('constructor', this.product)
			}

		})
	}

	onSubmit() {

		for(let i = 0; i < this._dataService.products.length; i++){
			if(this._dataService.products[i].id == this.product.id){
				this._dataService.products[i].title = this.product.title
				this._dataService.products[i].price = this.product.price
				this._dataService.products[i].url = this.product.img
			}
  		}
		this.product = new Product();
 	 }

 	 deleteProd(){
		// console.log('delete', this.product.id)

 	 	for(let i = 0; i < this._dataService.products.length; i++){
			if(this._dataService.products[i].id == this.product.id){
				this._dataService.products.splice(i, 1);
				console.log(this._dataService.products)
			}
		}

		this._router.navigate(['/products'])
 	 }

	ngOnInit(){
	
	}
}
