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
         const response = await axios.post('https://crudcrud.com/api/a35ede3ffed34c3e92f2223175911a67/users',
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