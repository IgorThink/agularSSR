import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { AuthService } from '../../services/auth.service';
import { IUserResponse } from '../../../shared-module/interfaces/IUserResponse';
import * as UserActions from '../../../../store/user/user.actions';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public authForm: FormGroup = new FormGroup({});
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      type: 'login' | 'signup';
    },
    private dialogRef: MatDialogRef<AuthFormComponent>,
    private authService: AuthService,
    private store: Store<{ user: IUserResponse }>
  ) {
    this.authForm = new FormGroup({
      username: new FormControl('kminchelle', Validators.required),
      password: new FormControl('0lelplR', Validators.required),
    });
  }

  public onSubmit(): void {
    this.authService
      .loginUser(this.authForm.getRawValue())
      .subscribe((data: any) => {
        if (data) {
          localStorage.setItem('token', data.token);
          this.store.dispatch(UserActions.auth({ actionValue: data }));
          this.dialogRef.close();
        }
      });
  }
}
