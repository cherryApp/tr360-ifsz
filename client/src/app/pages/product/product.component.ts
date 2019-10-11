import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Base } from '../base';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends Base implements OnInit {

  constructor(
    productService: ProductService
  ) { 
    super(productService, Product);
  }

  ngOnInit() {

  }

}
