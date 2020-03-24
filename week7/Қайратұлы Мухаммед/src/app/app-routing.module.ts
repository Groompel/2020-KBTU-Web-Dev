import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';


const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "tasks",
  },
  {
    path: "tasks", component: TaskListComponent,
  },
  {
    path: "tasks/:id", component: TaskDescriptionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
