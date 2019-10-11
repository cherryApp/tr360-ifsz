import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-ag',
  templateUrl: './product-ag.component.html',
  styleUrls: ['./product-ag.component.css']
})
export class ProductAgComponent extends Base implements OnInit {

  productList: Product[] = [];

  constructor(
    productService: ProductService
  ) {
    super(productService, Product);
  }

  ngOnInit() {
    this.list.subscribe(
      list => this.productList = list
    );
  }

}
