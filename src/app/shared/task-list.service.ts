import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  public wasUpdated = new EventEmitter<any>();
  public taskListArray: string[] = [];

  constructor() { }

  public addTask(task: string) {
    this.taskListArray.push(task);
    this.wasUpdated.emit();
  }

  public getTaskList() {
    return this.taskListArray.slice();
  }
}
