import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  selectedItemsCount = new Subject();

  constructor() { }

  selectedItem(data){
    this.selectedItemsCount.next(data);
  }
}
