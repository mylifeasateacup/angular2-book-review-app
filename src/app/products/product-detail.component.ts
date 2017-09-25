import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Book Detail';
  product: IProduct;

  //define router path as dependency as a parameter to constructure function below
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) {     
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product =  {
      "productId": id,
      "bookName": "A Conjuring Of Light",
      "authorName": "V.E. Schwab",
      "isbnNumber": "9-780 76538 7462",
      "releaseDate": "February 21, 2017",
      "description": "The precarious equilibrium among four Londons has reached its breaking point. Once brimming with the red vivacity of magic, darkness casts a shadow over the Maresh Empire, leaving a space for another London to rise.",
      "price": 12.91,
      "starRating": 4,
      "imageUrl": "https://images.gr-assets.com/books/1464017758l/29939230.jpg"
    }
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
