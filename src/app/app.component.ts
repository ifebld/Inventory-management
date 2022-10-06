import { Component } from '@angular/core';
import { ManagementService } from './management.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-management';

  constructor(public managementService : ManagementService ) {
  }


  // this.managementService.loggedIn = true
}
