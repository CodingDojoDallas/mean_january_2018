import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product = new Product();
  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { 
  	this.product = this._dataService.retrieveProduct();
  }

  ngOnInit() {
  }

  onSubmit(){
  	this._dataService.addProduct(this.product);
  	this.product = new Product();
  	this._router.navigate(['products']);
  }

}
