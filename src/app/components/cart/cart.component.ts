import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../../services/rest-service.service';
import { DataServiceService } from '../../services/data-service.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  localCartItems:any;
  itemQuantity= [{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10}];
  
  totalAmount : number;
  constructor(public restService : RestServiceService,private router: Router,private dataTransferService:DataServiceService) { }

  ngOnInit(): void {
    this.localCartItems = JSON.parse(localStorage.getItem('cartData'));
    this.setTotalAmout();

  }
  quantityValueChange(ev,data){
    data.quantity = ev.target.value;
    this.setTotalAmout();
  }

  removeItem(i){
    this.localCartItems.splice(i,1);
    localStorage.setItem('cartData',JSON.stringify(this.localCartItems));
    this.setTotalAmout();
  }

  setTotalAmout(){
    this.totalAmount = 0 ;
    this.totalAmount = this.localCartItems.reduce((prev, cur) => {
      return prev + cur.quantity * cur.item.price;
    }, 0);

    let count = this.localCartItems.reduce((prev, cur) => {
      return parseInt(prev) + parseInt(cur.quantity);
    }, 0);
    localStorage.setItem('selectedItemsCount',JSON.stringify(parseInt(count)));
    this.dataTransferService.selectedItem(count);
    
  }

  goToBack(data){
    this.router.navigate([data.path+'/details/'+data.item.id]);
  }

}
