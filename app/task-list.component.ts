import {Component, EventEmitter} from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'task-list',
  inputs:['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  pipes: [DonePipe],
  templateUrl: 'app/task-list.component.html'
})

export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "notDone";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(description: string): void{
    this.taskList.push(
      new Task(description, this.taskList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
