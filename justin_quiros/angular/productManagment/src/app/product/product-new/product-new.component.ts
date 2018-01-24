import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Product } from '../../product';



@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css', '../../bootstrap.min.css']
})
export class ProductNewComponent implements OnInit {

  product = new Product();

  constructor(private _dataService: DataService) { }

  submitted: boolean = false;

  id = 0

  onSubmit() {

  	if(this.id == 0){
  		this.product.id = 1
  		this.id++
  	}
  	else{
  		this.id++
  		this.product.id = this.id
  	}


  	this._dataService.products.push(this.product);
  	this.product = new Product();
  	console.log(this._dataService.products)

  	this.submitted = !this.submitted;
  }

  ngOnInit() {
  }

}
