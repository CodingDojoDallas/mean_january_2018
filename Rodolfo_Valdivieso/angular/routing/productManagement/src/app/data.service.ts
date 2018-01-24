import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable()
export class DataService {
  product = new Product();
  products:any = [];
  constructor() { 


  }
  retrieveProduct(){
  	return this.product;
  }

  getProduct(id){
  	for(var i=0; i<this.products.length;i++){
  		if(this.products[i].id == id){
  			this.product = this.products[i];
  		}

  	}
  	return this.product;
  }

  deleteProduct(prod){
  	for(var i=0; i<this.products.length;i++){
  		if(this.products[i].id == prod.id){
  			this.products.splice(i, 1);
  		}
  	}
  	this.product = new Product();
  }

  updateProduct(prod){
  	for(var i=0; i<this.products.length;i++){
  		if(this.products[i].id == prod.id){
  			this.products[i] = prod;
  		}
  	}
  	this.product = new Product();
  }

  addProduct(pro){
  	this.product = pro;
  	var id = 1;
  	if (this.products.length == 0 || this.products.length == null){
  		id = 1;
  	}
  	else{
  		id = this.products[this.products.length - 1].id + 1;
  	}
  	this.product.id = id;
  	this.products.push(this.product);
  	//console.log(this.products);
  	this.product = new Product();
  	
  }

}
