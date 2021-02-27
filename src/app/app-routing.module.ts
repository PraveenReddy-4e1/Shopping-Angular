import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ItemDetailsComponent } from './components/menu-tab/common/item-details/item-details.component';
import { ListItemsComponent } from './components/menu-tab/common/list-items/list-items.component';
import { HomeComponent } from './components/menu-tab/home/home.component';
import { LadiesTshirtsComponent } from './components/menu-tab/ladies-tshirts/ladies-tshirts.component';
import { LadiesWearComponent } from './components/menu-tab/ladies-wear/ladies-wear.component';
import { MensTshirtsComponent } from './components/menu-tab/mens-tshirts/mens-tshirts.component';
import { MensWearComponent } from './components/menu-tab/mens-wear/mens-wear.component';
import { MenuTabComponent } from './components/menu-tab/menu-tab.component';

const routes: Routes = [

  { path: '', component:  MenuTabComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'mens', component: MensWearComponent,
     children:[
      { path: '', component: ListItemsComponent},
      { path: 'details/:id', component: ItemDetailsComponent},
     ]},
    { path: 'ladies', component: LadiesWearComponent,
    children:[
      { path: '', component: ListItemsComponent},
      { path: 'details/:id', component: ItemDetailsComponent},
     ]},
    { path: 'mensT', component: MensTshirtsComponent,
    children:[
      { path: '', component: ListItemsComponent},
      { path: 'details/:id', component: ItemDetailsComponent},
     ]},
    { path: 'ladiesT', component: LadiesTshirtsComponent,
    children:[
      { path: '', component: ListItemsComponent},
      { path: 'details/:id', component: ItemDetailsComponent},
     ]},
  ]},
  { path: 'cart', component:  CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
