import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/header-module/components/header/header.component';
import { IUserResponse } from './modules/shared-module/interfaces/IUserResponse';
import { Store } from '@ngrx/store';
import { selectAllTodos, selectUser } from './store/user/user.selectors';
import { TodoService } from './modules/todo-module/services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ITodo } from './modules/shared-module/interfaces/ITodoResponse';
import * as TodoActions from '../app/store/todo/todo.actions';
import { TodoListComponent } from './modules/todo-module/components/todo-list/todo-list.component';
import { BrowserApiService } from './modules/shared-module/services/platform.service';
import { FooterComponent } from './modules/shared-module/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ssr-todo';

  todoList$ = this.store.select(selectAllTodos);

  selectUsers = selectUser;

  constructor(
    public store: Store<{
      user: IUserResponse;
      todo: ITodo[];
    }>,
    private todoService: TodoService,
    private browserApiService: BrowserApiService
  ) {}

  ngOnInit() {
    if (this.browserApiService.isBrowser()) {
      this.todoService.getAllTask().subscribe((data) => {
        this.store.dispatch(
          TodoActions.getAll({ actionValue: data?.todos || [] })
        );
      });
    }
  }
}
