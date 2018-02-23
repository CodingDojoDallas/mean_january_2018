import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RESTful Task API';
  tasks: Task[];
  retrievedTask: Task;

  constructor(private _httpService: HttpService){
    this.tasks = [];
    this.retrievedTask = new Task();
  }

  ngOnInit(){
    this.getTasksFromService();

    // this.createTaskByService({
    //   title: "Test Task", 
    //   description: "Test task for create, update, delete"
    // });

    // this.deleteTaskByService("5a8f783ce693321324584ce3");
  }

  getTasksFromService(){
    this._httpService.getTasks().subscribe(
      tasks => {
        this.tasks = tasks;

        // Get Second Task after getting all tasks
        this.getOneTaskFromService(this.tasks[1]['_id']);
      },
      error => {
        console.log("Error:", error);
      }
    );
  }

  getOneTaskFromService(taskID){
    this._httpService.getOneTask(taskID).subscribe(
      task => {
        this.retrievedTask = task;
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  createTaskByService(taskBody){
    this._httpService.createTask(taskBody).subscribe(
      task => {
        console.log("Created Task:", task);
      },
      error => {
        console.log("Error:", error);
      }
    );
  }

  updateTaskByService(taskID, taskBody){
    this._httpService.updateTask(taskID, taskBody).subscribe(
      task => {
        console.log("Updated Task:", task);
      },
      error => {
        console.log("Error:", error);
      }
    );
  }

  deleteTaskByService(taskID){
    this._httpService.deleteTask(taskID).subscribe(
      task => {
        console.log("Deleted Task:", task);
      },
      error => {
        console.log("Error:", error);
      }
    )
  }

}
