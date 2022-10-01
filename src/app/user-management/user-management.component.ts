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

  
  users : Array<any> = [];
  constructor(public managementService : ManagementService ) {
    //this.users = this.managementService.users
  }

  // ngOnInit(): void {
  //   (async () => {
  //     this.users = await this.managementService.getUsers();
  //     console.log(this.users);
  //   }) ();
  // }
  
  ngOnInit(): void {
    
  }

  user:any = {}
 

    showDialog(user:any) {
        this.display = true;
        console.log(this.user)
        this.managementService.userToEdit = {...this.user}
    }

    submit(){}

  deleteUser(){

  }

}


// editform : any = {};
//     openEditDialogue(userDetails:any){
//       console.log(this.userDetails)
//       //this.editform = Object.assign(user);
//       this.editformService.userToEdit = {...this.userDetails};
//     }
//     deleteUser(){
//       this.deleteItem.emit(this.userDetails)
//     }