import { Injectable } from '@angular/core';
import { Task } from './task';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TaskService {
  tasks = [];

  constructor(private _http: Http) { }

  retrieveAll(callback){
    this._http.get('/tasks').subscribe(
      tasks => { this.tasks = tasks.json(); callback(this.tasks); },
      error => { console.log(error.json()) }
    );
  }

  createTask(task: Task, callback, errorback){
    console.log(task);
    this._http.post('/tasks', task).subscribe(
      success => { this.tasks.push(success.json()); callback(""); },
      error => { errorback(error.json()); }
    );
  }


}
