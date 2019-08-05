import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from './product';
import { IgxDialogComponent, IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  product: Product = new Product();
  @ViewChild('productgrid', { read: IgxGridComponent, static: true })
  public productgrid: IgxGridComponent;
  @ViewChild('dialogAdd', { read: IgxDialogComponent, static: true })
  public dialog: IgxDialogComponent;
  updateddata: Product;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getProducts();
  }
  public removeProduct(rowIndex) {
    console.log(rowIndex);
    const row = this.productgrid.getRowByIndex(rowIndex);
    this.appService.deleteProduct(rowIndex).subscribe(data => {
      this.getProducts();
      //row.delete();
   });
  }

  addProduct() {
    this.product.id = this.getRandomArbitrary(10, 10000);
    this.appService.addProduct(this.product).subscribe(data => {
      this.product = data;
      this.product.ExpiryDate = new Date(data.ExpiryDate);
      console.log(this.product);
      this.productgrid.addRow(this.product);
      this.product = new Product();
    });
    this.product = new Product();
    this.cancel();

  }
  cancel() {
    this.dialog.close();
    this.product = new Product();
  }


  getProducts() {
    this.appService.getProducts().subscribe(data => {
      this.products = data;
      this.products.forEach((d) => {
        d.ExpiryDate = new Date(d.ExpiryDate);
      });
    });
  }

  rowcancel() {

    console.log('row cancel');
  }

  rowedited(data) {
    console.log('edited row : ' + data.rowID);
    const abc = data.newValue as Product;
    this.appService.updateProduct(abc).subscribe(res => {
      console.log(res);
      this.getProducts();
    });
  }

   getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
