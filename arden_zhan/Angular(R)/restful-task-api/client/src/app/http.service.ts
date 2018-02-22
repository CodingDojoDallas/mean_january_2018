import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.createTask({title: "Test Task", description: "Test task for create, update, delete"});
    this.deleteTask("5a8e437ef4a1782e648e0fd2");
  }

  getTasks(){
    this._http.get('/tasks').subscribe(
      (tasks) => {
        console.log("Got our tasks!", tasks);
        let firstTaskID = tasks[0]["_id"];
        this.getOneTask(firstTaskID);
      }
    )
  }

  getOneTask(taskID){
    this._http.get(`/tasks/${taskID}`).subscribe(
      (task) => { 
        console.log("First task", task);
      }
    )
  }

  createTask(taskBody){
    this._http.post('/tasks', taskBody).subscribe(
      (task) => {
        console.log("Created task", task);
        this.updateTask(task["_id"], {completed: true});
      }
    )
  }

  updateTask(taskID, taskBody){
    this._http.put(`/tasks/${taskID}`, taskBody).subscribe(
      (task) => {
        console.log("Updated task", task);
        this.deleteTask(task["_id"]);
      }
    )
  }

  deleteTask(taskID){
    this._http.delete(`/tasks/${taskID}`).subscribe(
      (task) => {
        console.log("Deleted task", task);
      },
      (err) => {
        console.log("Error", err);
      }
    )
  }

}