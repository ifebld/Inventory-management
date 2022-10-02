import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import axios from 'axios'

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(public managementService : ManagementService) { }

  ngOnInit(): void {
  }

  name=""
  pname=""
  address = ""
  quantity = ""
  value=""

  submitInventory(){   
    (async () => {
       try {
         const response = await axios.post('https://crudcrud.com/api/311fa0f0256144cfbd3af691869b9e50/inventorys',
         {
           name : this.name,
             pname : this.pname,
             address: this.address,
             value: this.value,
             quantity: this.quantity
         });
         console.log(response);
         
        }  catch (error) {
          console.error(error);
        }
      })()}

}
