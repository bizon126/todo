import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  public taskListArray: string[] = [];

  constructor() { }

  public addTask(task: string) {
    this.taskListArray.push(task);
  }

  public getTaskList() {
    return this.taskListArray.slice();
  }
}
