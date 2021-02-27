import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../../services/data-service.service';
import { RestServiceService } from '../../../../services/rest-service.service';
import { ActivatedRoute,Router} from '@angular/router';

import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  providers: [ConfirmationService]
})
export class ItemDetailsComponent implements OnInit {
  selectedItemData1:any;
  imagePath:any;
  id:any;
  pathFrom:any;
  itemDetails:any;
  itemSize= [{name:"XS"},{name:"S"},{ name:"M"},{ name:"L" },{ name:"S",}];
  itemSizeselected='M' ;
  itemQuantity= [{num:1},{num:2},{num:3},{num:4},{num:5}];
  itemQuanSelected:any = 1 ;
  position: string;
  acceptLabel="VIEW CART";
  rejectLabel="CHECKOUT"

  constructor(private dataTransferService:DataServiceService,
    private restService:RestServiceService,
    private route: ActivatedRoute,private router: Router,
    private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.pathFrom = this.router.url.split('/')[1];
      this.getSelectedItemDetails();

   });
  }

  getSelectedItemDetails(){
    let url = this.pathFrom + '/' +this.id ;
    this.restService.getListItems(url).subscribe((res:any)=>{
     this.itemDetails = res ;
    })
  }

  sizeValueChange(ev){
    this.itemSizeselected = ev.target.value;

  }
  quantityValueChange(ev){
    this.itemQuanSelected = ev.target.value;

  }

confirmPosition(position: string) {
    this.position = position;
    this.confirmationService.confirm({
        message: 'Added to cart',
        // header: 'Delete Confirmation',
        // icon: 'pi pi-info-circle',
        accept: () => {
            this.addItemToCart();
        },
        reject: () => {
            
        },
        key: "positionDialog"
    });
}

addItemToCart(){
  let getLocalData = JSON.parse(localStorage.getItem('cartData'));
  if(getLocalData){
    this.pushToArray(getLocalData,this.itemDetails);
  }else{
    let cartData = [{
      item: this.itemDetails,
      size : this.itemSizeselected,
      quantity : parseInt(this.itemQuanSelected),
      path : this.pathFrom
   }]
   localStorage.setItem('cartData',JSON.stringify(cartData));
   localStorage.setItem('selectedItemsCount',JSON.stringify(parseInt(this.itemQuanSelected)));
   this.dataTransferService.selectedItem(this.itemQuanSelected);
  }
  this.router.navigate(['/cart']);
}

pushToArray(arr, obj) {
  const index = arr.findIndex((x) => ((x.item.category === obj.category)&&(x.item.id === obj.id)));

  if (index === -1) {
    let cartData = {
      item: obj,
      size : this.itemSizeselected,
      quantity : parseInt(this.itemQuanSelected),
      path : this.pathFrom
   }
      arr.push(cartData);
  } else {
    arr[index].quantity = arr[index].quantity + this.itemQuanSelected;
    
  }
  localStorage.setItem('cartData',JSON.stringify(arr));
  let count = arr.reduce((prev, cur) => {
    return prev + cur.quantity;
  }, 0);
  localStorage.setItem('selectedItemsCount',JSON.stringify(parseInt(count)));
  this.dataTransferService.selectedItem(count);
}

}
