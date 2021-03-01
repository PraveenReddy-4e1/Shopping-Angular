import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MessagesModule,
    ConfirmDialogModule,
  ],
  exports:[ConfirmDialogComponent]
})
export class ReUseableModule { }
