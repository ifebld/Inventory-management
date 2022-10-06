import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId ="";
  emailPassword = "";

  constructor(public managementService : ManagementService, private router: Router) { }
 
  ngOnInit(): void {
    
  }


  login(){
    this.managementService.loggedIn = true;
    this.router.navigateByUrl('/user-management');
  }
}
 