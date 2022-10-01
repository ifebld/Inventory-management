import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { EditUserDialogueComponent } from '../edit-user-dialogue/edit-user-dialogue.component';
import { DeleteUserDialogueComponent } from '../delete-user-dialogue/delete-user-dialogue.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton'
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';





@NgModule({
  declarations: [
    LoginComponent,
    CreateUserComponent,
    UserManagementComponent,
    ChangePasswordComponent, 
    EditUserDialogueComponent,
    DeleteUserDialogueComponent
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
      {path: 'edit-user', component: EditUserDialogueComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'}
      
    ]),
    TableModule,
    FormsModule,
    DialogModule
  ],
  exports: [
    
  ]
})
export class UserModule { }
