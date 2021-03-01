import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  providers: [ConfirmationService]
})
export class ConfirmDialogComponent implements OnInit {
  @Input() position:any;
  @Input() acceptLabel:any;
  @Input() rejectLabel:any;

  @Output() public confirmCall = new EventEmitter();

  constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) { }
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
   }

  confirmPosition() {
    this.confirmationService.confirm({
        message: 'Added to cart',
        // header: 'Delete Confirmation',
        // icon: 'pi pi-info-circle',
        accept: () => {
          this.confirmCall.emit('true');
        },
        reject: () => {
            
        },
        key: "positionDialog"
    });
}

}
