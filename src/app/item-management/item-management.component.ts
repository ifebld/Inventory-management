import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';

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

  ngOnInit(): void {
    (async () => {
      this.inventorys = await this.managementService.getInventorys();
      console.log(this.inventorys);
    }) ();
  }

}
