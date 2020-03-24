import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";
import { TASKS } from "../tasks";
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = TASKS;

  getAllTasks(): Observable<any> {
    return of(this.tasks);
  }

  getTaskById(id): Observable<any> {
    const task = this.tasks.find(task => {
      if(task.id == id){
        return task;
      }
    });
    return of(task);
  }

  constructor() { }
}
