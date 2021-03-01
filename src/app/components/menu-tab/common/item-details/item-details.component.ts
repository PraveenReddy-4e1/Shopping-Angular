import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../../services/data-service.service';
import { RestServiceService } from '../../../../services/rest-service.service';
import { ActivatedRoute,Router} from '@angular/router';




@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
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
  position='top-right';
  acceptLabel="VIEW CART";
  

  constructor(private dataTransferService:DataServiceService,
    private restService:RestServiceService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
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
    this.itemQuanSelected = parseInt(ev.target.value);

  }

addItemToCart(){
  let getLocalData = JSON.parse(localStorage.getItem('cartData'));
  if(getLocalData){
    this.pushToArray(getLocalData,this.itemDetails);
  }else{
    let cartData = [{
      item: this.itemDetails,
      size : this.itemSizeselected,
      quantity : this.itemQuanSelected,
      path : this.pathFrom
   }]
   localStorage.setItem('cartData',JSON.stringify(cartData));
   localStorage.setItem('selectedItemsCount',this.itemQuanSelected);
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
      quantity : this.itemQuanSelected,
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
  localStorage.setItem('selectedItemsCount',count);
  this.dataTransferService.selectedItem(count);
}

fromReusable(ev){
  this.addItemToCart();
}
}
