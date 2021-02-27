import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../../../../services/rest-service.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  routePath:any;
  listHeading:string;
  listItemsArray:any;
  largeImage:any;
  constructor(private restService:RestServiceService,private router: Router) { }

  ngOnInit(): void {
    this.routePath=this.router.url.split('/').pop();
    this.getlistItemDetials();
  }
  
  getlistItemDetials(){
    if(this.routePath === 'mens'){
      this.listHeading = "Men's Outerwear" ;
      this.largeImage = this.restService.largeImagePath + 'images/mens_outerwear.jpg';
    }else if(this.routePath === 'ladies'){
      this.listHeading = "Ladies Outerwear" ;
      this.largeImage = this.restService.largeImagePath + 'images/ladies_outerwear.jpg';
    }else if(this.routePath === 'mensT' ){
      this.listHeading = "Men's T-Shirts" ;
      this.largeImage = this.restService.largeImagePath + 'images/mens_tshirts.jpg';
    }else if(this.routePath === 'ladiesT' ){
      this.listHeading = "Ladies T-Shirts" ;
      this.largeImage = this.restService.largeImagePath + 'images/ladies_tshirts.jpg';
    }
    this.restService.getListItems(this.routePath).subscribe((res:any)=>{
      this.listItemsArray = res;
     })
  }

  getDetails(item){
     this.router.navigate([this.routePath+'/details/'+item.id]);
  }

}
