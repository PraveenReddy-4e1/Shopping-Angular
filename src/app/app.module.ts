import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuTabComponent } from './components/menu-tab/menu-tab.component';
import { HomeComponent } from './components/menu-tab/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { MensWearComponent } from './components/menu-tab/mens-wear/mens-wear.component';
import { LadiesWearComponent } from './components/menu-tab/ladies-wear/ladies-wear.component';
import { MensTshirtsComponent } from './components/menu-tab/mens-tshirts/mens-tshirts.component';
import { LadiesTshirtsComponent } from './components/menu-tab/ladies-tshirts/ladies-tshirts.component';
import { ListItemsComponent } from './components/menu-tab/common/list-items/list-items.component';

import { HttpClientModule } from '@angular/common/http';
import { RestServiceService } from './services/rest-service.service';
import { ItemDetailsComponent } from './components/menu-tab/common/item-details/item-details.component';
import { CartComponent } from './components/cart/cart.component'

import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuTabComponent,
    HomeComponent,
    FooterComponent,
    MensWearComponent,
    LadiesWearComponent,
    MensTshirtsComponent,
    LadiesTshirtsComponent,
    ListItemsComponent,
    ItemDetailsComponent,
    CartComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    MessagesModule,
    ConfirmDialogModule
  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
