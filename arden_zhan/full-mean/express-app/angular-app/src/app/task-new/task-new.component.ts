import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newTask: Task = new Task();

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._taskService.createTask(
      this.newTask, 
      res => { this.newTask = new Task(); }, 
      err => { console.log(err) }
    );
    
  }

}
