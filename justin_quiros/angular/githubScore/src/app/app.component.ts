import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'bootstrap.min.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _requestService: RequestService) {
  	this.user = this._requestService.user
   }


  onSubmit() {
  	this._requestService.calculate();
  }

  ngOnInit() {

  }


}