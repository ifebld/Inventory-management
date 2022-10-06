import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserManagementComponent } from '../user-management/user-management.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton'
import {ButtonModule} from 'primeng/button';

import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [
    LoginComponent,
    CreateUserComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    RouterModule.forRoot([
      {path: 'create-user', component: CreateUserComponent},
      {path: 'user-management', component: UserManagementComponent},
      {path: 'login', component: LoginComponent},

      {path: '', redirectTo: '/login', pathMatch: 'full'}
      
    ]),
    TableModule,
    FormsModule,
    DialogModule,
    PaginatorModule
  ],
  exports: [
    
  ]
})
export class UserModule { }
