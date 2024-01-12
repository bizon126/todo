import {EventEmitter, Injectable, Output} from '@angular/core';
import {TaskModel} from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  public wasUpdated = new EventEmitter<any>();
  public taskListArray: TaskModel[] = [];


  constructor() { }

  public addTask(task: string) {
    this.taskListArray.push(new TaskModel(task, true));
    this.wasUpdated.emit();
  }

  public getTaskList() {
    return this.taskListArray.slice();
  }


}
