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
         const response = await axios.post('https://crudcrud.com/api/a35ede3ffed34c3e92f2223175911a67/inventorys',
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
