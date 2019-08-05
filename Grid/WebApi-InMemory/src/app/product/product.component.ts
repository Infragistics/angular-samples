import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.appService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

  }

}
