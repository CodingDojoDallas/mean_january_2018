import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  newProduct: Product = new Product();

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  create(){
    this._dataService.addProduct(this.newProduct);
    this.newProduct = new Product();
    this._router.navigate(['/products']);
  }

}
