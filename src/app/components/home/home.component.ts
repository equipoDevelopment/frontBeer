import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/brand';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

brands:Brand[];

constructor(private brandService: ProductService){this.brands = []} 

ngOnInit(): void {
  this.brandService.getBrands().subscribe(res => this.brands=res);
}

}
