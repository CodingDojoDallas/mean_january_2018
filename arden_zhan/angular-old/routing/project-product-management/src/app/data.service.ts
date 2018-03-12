import { Injectable } from '@angular/core';
import { Product } from './product'


@Injectable()
export class DataService {
  products = [];

  retrieveProduct(id){
    return this.products.find(x => x.id == id);
  }

  retrieveProducts(){
    return this.products;
  }

  addProduct(product: Product){
    this.products.push(product);
  }

  updateProduct(product: Product){
    let index = this.products.findIndex(x => x.id == product.id);
    if (index != -1) this.products[index] = product;
  }

  removeProduct(productID: number){
    let index = this.products.findIndex(x => x.id == productID);
    if (index != -1) this.products.splice(index, 1);
  }

  constructor() {  }

}
