import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItemComponent } from '../create-item/create-item.component';
import { ItemManagementComponent } from '../item-management/item-management.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton'
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import {InputNumberModule} from 'primeng/inputnumber';
import { CheckItemComponent } from '../check-item/check-item.component';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    CreateItemComponent,
    ItemManagementComponent,
    CheckItemComponent
  ],
  imports: [
    CommonModule,
    PasswordModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forRoot([
      {path: 'create-item', component: CreateItemComponent},
      {path: 'item-management', component: ItemManagementComponent},
      {path: 'check-item', component: CheckItemComponent}
      // {path: '', redirectTo: '/product-details', pathMatch: 'full'}
      
    ]),
    TableModule,
    InputNumberModule,
    FormsModule,
    DialogModule
  ]
})
export class InventoryModule { }
