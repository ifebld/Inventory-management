import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.css']
})
export class CheckItemComponent implements OnInit {

  items : Array<any> = [];
  selectedItem : any;
  checkIn : any;
  quantity : any;
  constructor(public managementService : ManagementService ) {
    //this.users = this.managementService.users
  }

  ngOnInit(): void {
    (async () => {
      this.items = await this.managementService.getInventorys();
      console.log(this.items);
    }) ();
  }

  onChangeofOptions(selected : any){
    console.log(selected);
  }

  submitCheckIn(){
    console.log(this.selectedItem);
    console.log(this.checkIn)
    console.log(this.quantity)

    //get product object using ID gotten
    let selectedProduct: any = {};
    let updatedQuantity;
    this.items.forEach( (item) => {
      if(
        this.selectedItem == item._id 
      ){
        selectedProduct = item
      }
    }) 

    if (this.checkIn == "increase") {
          updatedQuantity = this.quantity + selectedProduct.quantity;
    } else {
      if (selectedProduct.quantity > this.quantity) {
        updatedQuantity = selectedProduct.quantity - this.quantity  
      }else{
        alert("Error!!!")
      }
    }
    console.log(updatedQuantity)


    


  }

}
