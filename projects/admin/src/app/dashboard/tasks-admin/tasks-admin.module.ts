import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksAdminRoutingModule } from './tasks-admin-routing.module';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';


@NgModule({
  declarations: [
    AddTasksComponent,
    ListTasksComponent
  ],
  imports: [
    CommonModule,
    TasksAdminRoutingModule
  ]
})
export class TasksAdminModule { }
