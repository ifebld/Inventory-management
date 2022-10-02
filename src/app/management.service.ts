import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  user: any;

  constructor() { }

  
  users : Array<any> = [];

  inventorys: Array<any> = [];
  userToEdit : any = {};

  getUsers =  async  () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/311fa0f0256144cfbd3af691869b9e50/users');
      console.log(response);
      this.users = response.data;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };


  getInventorys =  async  () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/311fa0f0256144cfbd3af691869b9e50/inventorys');
      console.log(response);
      this.users = response.data;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
