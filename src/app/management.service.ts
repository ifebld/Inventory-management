import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  user: any;

  constructor() { }

  loggedIn : boolean = false;
  users : Array<any> = [];

  inventorys: Array<any> = [];
  userToEdit : any = {};
  quantityToUpdate: any = {};
  userToDelete :any = {};
  itemToEdit :any = {};

  getUsers =  async  () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/c6cd3475f89647259fc9d17e9f3c9967/users');
      console.log(response);
      this.users = response.data;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };


  getInventorys =  async  () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/c6cd3475f89647259fc9d17e9f3c9967/inventorys');
      console.log(response);
      this.users = response.data;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
