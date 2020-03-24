import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks;

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    const tasksObservable = this.tasksService.getAllTasks();
    tasksObservable.subscribe(obsTasks => {
      this.tasks = obsTasks;
    });
  }

}
