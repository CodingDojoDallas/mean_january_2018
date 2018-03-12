import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  tasks: any[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.tasks.subscribe(
      (tasks) => { this.tasks = tasks; }
    );
  }

}
