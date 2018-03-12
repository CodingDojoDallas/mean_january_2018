import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  tasks: any[] = [];
  newTask = {};

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.tasks.subscribe(
      (tasks) => { this.tasks = tasks; }
    );
  }

  onSubmit(){
    this._taskService.addTask(this.newTask);
    this.newTask = {};
  }

}
