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

  display1: boolean = false;

  selectedValue="";
  user = {} ;
  
  users : Array<any> = [];
  constructor(public managementService : ManagementService ) {
    }

  ngOnInit(): void {
    (async () => {
      this.users = await this.managementService.getUsers();
      console.log(this.users);
    }) ();
  }  
 
  letUser(user:any){
    this.display1 = true;
    this.managementService.userToDelete = {...user};
    console.log(user)
  }

    showEditDialog(user:any) {
        this.display = true;
        this.managementService.userToEdit = {...user}
        console.log(user)
    }

    submit(){
      this.display = false;
      (async () => {
        let editPayload = {...this.managementService.userToEdit}
        delete editPayload._id;
        try {
          const response:any = await axios.put(`https://crudcrud.com/api/c6cd3475f89647259fc9d17e9f3c9967/users/${this.managementService.userToEdit._id}`, editPayload);
          console.log(response)
          this.users = await this.managementService.getUsers();
        }catch (error) {
        console.error(error);
        }
      })()
    }

  deleteUser(){this.display1 = false;
    (async () => {
      try{
        const response = await axios.delete(`https://crudcrud.com/api/c6cd3475f89647259fc9d17e9f3c9967/users/${this.managementService.userToDelete._id}`, this.managementService.userToDelete);
        console.log(response)
        this.users = await this.managementService.getUsers();
      }catch(error){
        console.error(error);
      }
    })()
  }

  
}
