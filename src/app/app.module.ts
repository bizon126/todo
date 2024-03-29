import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import {TaskListService} from "./shared/task-list.service";
import { DoneListComponent } from './done-list/done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTaskComponent,
    TaskListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
