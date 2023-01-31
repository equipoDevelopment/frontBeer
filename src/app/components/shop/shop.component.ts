import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShopService } from '../../services/shop.service';
import { Product } from './shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  title = 'shop';
  products:Product[]=[];

  constructor( private shopService:ShopService){
   
      
  }

  ngOnInit(){
    this.getProducts();
  }

  private getProducts():void{
    this.shopService.getProducts().subscribe(res=>this.products = res);
  }



}
