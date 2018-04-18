import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks(){
    return this._http.get<Task[]>('/tasks');
  }

  getOneTask(taskID){
    return this._http.get<Task>(`/tasks/${taskID}`);
  }

  createTask(taskBody){
    return this._http.post<Task>('/tasks', taskBody);
  }

  updateTask(taskID, taskBody){
    return this._http.put<Task>(`/tasks/${taskID}`, taskBody);
  }

  deleteTask(taskID){
    return this._http.delete(`/tasks/${taskID}`);
  }

}