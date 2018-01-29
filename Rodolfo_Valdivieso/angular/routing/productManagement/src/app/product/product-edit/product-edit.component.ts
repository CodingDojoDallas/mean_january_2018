import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product = new Product();
  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { 
  	var id;
  	this._route.paramMap.subscribe( params => {
       	id = params.get('id');
   	});

  	this.product = this._dataService.getProduct(id);
  }

  ngOnInit() {
  }

  onSubmit(){
  	//alert("update");
  	this._dataService.updateProduct(this.product);
  	this.product = new Product();
  	this._router.navigate(['products']);
  }

  deleteProduct(){
  	this._dataService.deleteProduct(this.product);
  	this.product = new Product();
  	this._router.navigate(['products']);
  }

}
