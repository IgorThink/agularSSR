import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ITodo } from '../../../shared-module/interfaces/ITodoResponse';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  imports: [CommonModule, MatCardModule, MatCheckboxModule],
})
export class TodoCardComponent {
  @Input() todo: ITodo = {} as ITodo;
}
