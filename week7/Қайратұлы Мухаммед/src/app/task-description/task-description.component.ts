import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Form } from "@angular/forms"
declare const getDataOfClass: any;
@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.scss']
})
export class TaskDescriptionComponent implements OnInit {


  task;

  constructor(
    private actRoute: ActivatedRoute,
    private tasksService: TasksService,
  ) { }

  submitForm() {
    console.log(getDataOfClass("task-title-input"));
  }

  ngOnInit(): void {
    let taskId;

    this.actRoute.paramMap.subscribe(params => {
      taskId = params.get("id");
    });

    const taskObservable = this.tasksService.getTaskById(taskId);
    taskObservable.subscribe(obsTask => {
      this.task = obsTask;
    });
  }

}
