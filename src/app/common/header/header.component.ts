import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemsQuanCount:any=0;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.itemsQuanCount = localStorage.getItem('selectedItemsCount');
    this.dataService.selectedItemsCount.subscribe((res:any)=>{
        this.itemsQuanCount = localStorage.getItem('selectedItemsCount');
    })
  }

}
