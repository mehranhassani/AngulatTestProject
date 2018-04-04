import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Details';
  constructor() { }

  ngOnInit() {
  }

}
