import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskDoneDirective } from './shared';
import { TaskListComponent } from './list';
import { CreateTaskComponent } from './create';
import { EditTaskComponent } from './edit';

@NgModule({
  declarations: [
    TaskListComponent,
    CreateTaskComponent,
    EditTaskComponent,
    TaskDoneDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
