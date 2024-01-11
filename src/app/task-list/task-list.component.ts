import {Component, OnInit} from '@angular/core';
import {TaskListService} from "../shared/task-list.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  public taskList: string[] = [];

  constructor(private taskListSrv: TaskListService) {
  }

  ngOnInit() {
    this.taskList = this.taskListSrv.getTaskList();
    this.taskListSrv.wasUpdated.subscribe(
      () => {
        this.taskList = this.taskListSrv.getTaskList();
      }
    )
    console.log(this.taskList);
  }

}
