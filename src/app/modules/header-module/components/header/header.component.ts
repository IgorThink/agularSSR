import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';

import { AuthFormComponent } from '../auth-form/auth-form.component';
import { BrowserApiService } from '../../../shared-module/services/platform.service';
import { AuthService } from '../../services/auth.service';
import { IUserResponse } from '../../../shared-module/interfaces/IUserResponse';
import * as UserActions from '../../../../store/user/user.actions';
import { selectCurrentUser } from '../../../../store/user/user.selectors';
import { ITodo } from '../../../shared-module/interfaces/ITodoResponse';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    AuthFormComponent,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class HeaderComponent {
  public loggedIn: boolean = false;

  public user: IUserResponse | null = null;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private browserApiService: BrowserApiService,
    private store: Store<{ user: IUserResponse; todo: ITodo[] }>
  ) {
    store.select(selectCurrentUser).subscribe((data) => {
      this.loggedIn = !!data;
    });
  }

  openDialog(type: 'login' | 'signup'): void {
    const dialogRef = this.dialog.open(AuthFormComponent, {
      data: {
        type,
      },
    });
  }

  public logOut() {
    this.authService.logout();
    this.loggedIn = false;
    this.store.dispatch(UserActions.logOut());
  }

  ngOnInit() {
    if (this.browserApiService.isBrowser()) {
      this.authService
        .getUserByToken()
        .subscribe((data: IUserResponse | null) => {
          if (data) {
            this.loggedIn = true;
            this.user = data;
            this.store.dispatch(
              UserActions.auth({
                actionValue: data,
              })
            );
          }
        });
    }
  }
}
