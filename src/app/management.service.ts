import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor() { }

  
  users : Array<any> = [];

  inventorys: Array<any> = [];
  userToEdit : any = {};

  // getUsers =  async  () => {
  //   try {
  //     const response = await axios.get('https://crudcrud.com/api/a35ede3ffed34c3e92f2223175911a67/users');
  //     console.log(response);
  //     this.users = response.data;
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  // getInventorys =  async  () => {
  //   try {
  //     const response = await axios.get('https://crudcrud.com/api/a35ede3ffed34c3e92f2223175911a67/inventorys');
  //     console.log(response);
  //     this.users = response.data;
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
