import { Component, OnInit } from '@angular/core';

import * as shared from '../shared class and types/shared';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // p1 = new product();
  // logo: string = this.p1.ProductList.productImg;
  // name: string = this.p1.ProductList.productName;

  myProducts: any = [];
  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe({
      next: (data) => (this.myProducts = data),
    });
  }

  renderValues(): any {
    console.log('Hello from ProductsComponent thank you App');
    return this.myProducts;
  }
  GetProductById(prdId: number): any {
    return this.myProducts[prdId];
  }
}

export class product {
  Discount: shared.DiscountOffers = shared.DiscountOffers['No Discount'];
  storeName: string;
  storeLogo: string;
  ProductList: shared.IProduct;
  CategoryList: shared.ICategory;
  ClientName: string;
  IsPurshased: boolean;
  constructor() {
    this.storeName = 'storeName';
    this.storeLogo = 'storeLogo';
    this.ProductList = {
      productId: 10,
      productName: 'iphone',
      productQuantity: 2,
      productImg: '/iphone.png',
      productPrice: 2000,
    };
    this.CategoryList = {
      categoryId: 9,
      categoryName: 'amazon',
    };
    this.ClientName = 'ClientName';
    this.IsPurshased = true;
  }
}
