import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import axios from 'axios';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.css']
})
export class ItemManagementComponent implements OnInit {

  inventorys : Array<any> = [];
  constructor(public managementService : ManagementService ) {
    //this.users = this.managementService.users
  }

  display : boolean = false;
  inventory = {};

  ngOnInit(): void {
    (async () => {
      this.inventorys = await this.managementService.getInventorys();
      console.log(this.inventorys);
    }) ();
  }

  showEditDialog(inventory:any){
    this.display = true;
    this.managementService.itemToEdit = {...inventory}
    console.log(inventory)
  }

  submit(){
    this.display = false;
    (async () => {
      let editPayload = {...this.managementService.itemToEdit}
      delete editPayload._id;
      try {
        const response:any = await axios.put(`https://crudcrud.com/api/c6cd3475f89647259fc9d17e9f3c9967/inventorys/${this.managementService.itemToEdit._id}`, editPayload);
        console.log(response);
        this.inventory = await this.managementService.getInventorys();
      }catch (error) {
      console.error(error);
      }
    })()
  }

}
