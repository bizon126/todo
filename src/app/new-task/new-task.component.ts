import { Component } from '@angular/core';
import {TaskListService} from "../shared/task-list.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  public newTask: string = '';

  constructor(private taskListSrv: TaskListService) {
  }

  public onEnter() {
    this.taskListSrv.addTask(this.newTask);
    console.log('enter');
  }
}
