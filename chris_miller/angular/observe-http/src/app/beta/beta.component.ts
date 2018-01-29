import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
	task: any[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  	this._taskService.task.subscribe(
  		(task) => { this.task = task; }
  		);
  }

}
