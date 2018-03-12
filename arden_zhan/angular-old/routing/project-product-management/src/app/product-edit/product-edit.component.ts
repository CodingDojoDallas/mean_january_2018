import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
    private _dataService: DataService, 
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this._route.paramMap.subscribe( params => {
      this.product = this._dataService.retrieveProduct(params.get('id'));
    })
  }

  ngOnInit() {
  }

  updateProduct(){
    this._dataService.updateProduct(this.product);
    this._router.navigate(['products']);
  }
  removeProduct(){
    this._dataService.removeProduct(this.product.id);
    this._router.navigate(['products']);
  }

}
