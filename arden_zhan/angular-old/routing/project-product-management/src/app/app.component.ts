import { Component } from '@angular/core';
import { Product } from './product';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _dataService: DataService){
    let p1 = new Product(Date.now(), 'DSLR Camera', 1499.99, '../../assets/camera.jpg');
    let p2 = new Product(Date.now() + 1, 'iLaptop', 1299.99, '../../assets/laptop.jpg');
    this._dataService.addProduct(p1);
    this._dataService.addProduct(p2);
  }

}
