import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/http';

@Injectable()
export class TaskService {
	task: BehaviorSubject<any[]> = new BehaviorSubject([]);
	tasks = [];

  constructor(private _http: HttpClient) {
  	this.retrieveTask();
  	}

  updateTask(newTask: any): void {
  	const tempTask = this.task.getValue();
  	tempTask.push(newTask);
  	this.task.next(tempTask);
  }

   retrieveTask()
  {
  	this._http.get('https://5a68abd978f25e00122ad1dd.mockapi.io/task').subscribe( 
  		(tasks: any[]) => { tasks = this.tasks;	}
  	);
  }

  addTask()
  {
  	this._http.post('https://5a68abd978f25e00122ad1dd.mockapi.io/task', task).subscribe(
  		(response) => {	this.tasks.push(task); }
  	);
  }

}
