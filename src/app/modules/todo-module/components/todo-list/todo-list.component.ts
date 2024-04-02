import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ITodo } from '../../../shared-module/interfaces/ITodoResponse';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: 'todo-list.component.scss',
})
export class TodoListComponent {
  @Input() todos: ITodo[] | null = [];
}
