import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  public productsName:string;
  public products = ['phone','camera','watch'];
  title = 'demo';

  addProduct() {
    this.products.push(this.productsName);
  }

  constructor() { }

  ngOnInit() {
  }

  onRemoveProduct(productsName:string) {
    this.products = this.products.filter(p => p !== productsName);
  }

}
