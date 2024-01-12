import {Component, OnInit} from '@angular/core';
import {TaskListService} from "../shared/task-list.service";
import {TaskModel} from "../shared/task.model";
import {Event} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  public taskList: TaskModel[] = [];

  constructor(private taskListSrv: TaskListService) {
  }

  ngOnInit() {
    this.taskList = this.taskListSrv.getTaskList();
    this.taskListSrv.wasUpdated.subscribe(
      () => {
        this.taskList = this.taskListSrv.getTaskList();
        console.log(this.taskList);

      }
    )
  }

  onClick(event: TaskModel) {
    event.status = !event.status;
    this.taskListSrv.wasUpdated.emit();
  }

}
