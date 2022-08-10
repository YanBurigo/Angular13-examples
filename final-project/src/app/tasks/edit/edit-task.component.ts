import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { NgForm } from '@angular/forms'; 

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
    //Operador + converte para numerico
  	const id = +this.route.snapshot.params['id'];
	  this.task = this.taskService.getById(id);
  }

  atualizar(): void {
    if (this.formTask.form.valid) {
	    this.taskService.update(this.task);
	    this.router.navigate(['/task']);
    }
  }

}
