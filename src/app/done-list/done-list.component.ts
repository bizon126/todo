import {Component, OnInit} from '@angular/core';
import {TaskListService} from "../shared/task-list.service";
import {TaskModel} from "../shared/task.model";

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit{

  public doneList: TaskModel[] = [];
  private taskList: TaskModel[] = [];

  constructor(private taskListSrv: TaskListService) {
  }

  ngOnInit() {
    this.taskList = this.taskListSrv.getTaskList();
    this.sortDoneTasks();
    this.taskListSrv.wasUpdated.subscribe(
      () => {
        this.taskList = this.taskListSrv.getTaskList();
        this.sortDoneTasks();
      }
    )
  }

  sortDoneTasks() {
    this.doneList = [];
    this.taskList.forEach(
      (task) => {
        if(!task.status) this.doneList.push(task);
      }
    )
  }

}
