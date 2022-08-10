import { Routes } from '@angular/router';

import { TaskListComponent } from './list';
import { CreateTaskComponent } from './create';
import { EditTaskComponent } from './edit';

export const TaskRoutes: Routes = [
	{ 
		path: 'task', 
		redirectTo: 'task/list' 
	},
	{ 
		path: 'task/list', 
		component: TaskListComponent 
	},
	{ 
		path: 'task/create', 
		component: CreateTaskComponent 
	},
	{ 
		path: 'task/edit/:id', 
		component: EditTaskComponent 
	}
];
