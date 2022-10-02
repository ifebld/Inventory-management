import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  display: boolean = false;

  selectedValue=""
  user = {} 
  
  users : Array<any> = [];
  constructor(public managementService : ManagementService ) {
    }

  ngOnInit(): void {
    (async () => {
      this.users = await this.managementService.getUsers();
      console.log(this.users);
    }) ();
  }  
 
    showEditDialog(user:any) {
        this.display = true;
        this.managementService.userToEdit = {...user}
        console.log(user)
    }

    submit(){
      (async () => {
        try {
          const response:any = await axios.put(`https://crudcrud.com/api/311fa0f0256144cfbd3af691869b9e50/users/${this.managementService.userToEdit._id}`, this.managementService.userToEdit);
          console.log(response);
          
        }catch (error) {
        console.error(error);
        }
      })()
    }

  deleteUser(){}
}
