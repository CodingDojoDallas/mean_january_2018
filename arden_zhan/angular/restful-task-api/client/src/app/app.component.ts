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
  showToggleText: string;
  newTask: Task;
  editedTask: Task;
  editFormID: number;

  constructor(private _httpService: HttpService){ }

  ngOnInit(){
    this.tasks = [];
    this.showToggleText = "Show All Tasks";
    this.editFormID = -1;
    this.newTask = new Task;
    this.editedTask = new Task;
  }

  generateFormID(taskIndex){
    // Toggle Edit Form
    if (this.editFormID == taskIndex) return this.editFormID = -1;

    // Moves Edit Form to different task box
    this.editFormID = taskIndex;

    // Sets default values for editing in form
    let taskID = this.tasks[taskIndex]['_id'];
    this._httpService.getOneTask(taskID).subscribe(
      task => {
        this.editedTask = task;
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  createTask(){
    this._httpService.createTask(this.newTask).subscribe(
      task => {
        this.tasks.push(task);
      },
      error => {
        console.log("Error:", error);
      }
    );
    this.newTask = new Task;
  }

  toggleTasks(){
    if (this.tasks.length == 0){
      this.showAllTasks(); 
      this.showToggleText = "Hide All Tasks";
    }
    else {
      this.tasks = [];
      this.showToggleText = "Show All Tasks";
    }
  }

  showAllTasks(){
    this._httpService.getTasks().subscribe(
      tasks => this.tasks = tasks,
      error => console.log("Error:", error)
    )
  }

  retrieveTask(event: KeyboardEvent){
    let taskNum = +(<HTMLInputElement>event.target).value - 1;

    function between(x, min, max){
      return x >= min && x <= max;
    }

    if (between(taskNum, 0, this.tasks.length - 1)){
      let taskID = this.tasks[taskNum]['_id'];
      this._httpService.getOneTask(taskID).subscribe(
        task => {
          this.retrievedTask = task;
        },
        error => {
          console.log("Error", error);
        }
      );
    }
    else this.retrievedTask = {
      title: "Invalid Task Number", 
      description: "Choose number from All Tasks List"
    }
  }

  editTask(taskIndex){
    let taskID = this.tasks[taskIndex]['_id'];
    this._httpService.updateTask(taskID, this.editedTask).subscribe(
      task => {
        this.tasks[taskIndex] = task;
      },
      error => {
        console.log("Error:", error);
      }
    );

    //close edit task form
    this.editFormID = -1;
  }

  deleteTask(taskIndex){
    let taskID = this.tasks[taskIndex]['_id'];
    this._httpService.deleteTask(taskID).subscribe(
      task => {
        console.log("Deleted Task:", task);

        // remove the deleted task from this.tasks array
        // this.tasks.splice(this.tasks.findIndex(t => t['_id'] == task['_id']), 1);
        this.tasks.splice(taskIndex, 1);
      },
      error => {
        console.log("Error:", error);
      }
    )
  }

}
