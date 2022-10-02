import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import axios from 'axios'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(public managementService : ManagementService ) { }

  ngOnInit(): void {
    
  }

  name=""
  address=""
  email=""
  type=""

  submit(){   
    (async () => {
       try {
         const response = await axios.post('https://crudcrud.com/api/311fa0f0256144cfbd3af691869b9e50/users',
         {
           name : this.name,
             address : this.address,
             email: this.email,
             type: this.type
         });
         console.log(response);
         
        }  catch (error) {
          console.error(error);
        }
      })()}
    
    }