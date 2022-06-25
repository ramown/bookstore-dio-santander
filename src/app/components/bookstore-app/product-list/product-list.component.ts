import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Book[] = [];
  constructor(private servce: ProductService) { }

  ngOnInit(): void {
    this.servce.getBooks().subscribe(res => {
      console.log(res);
      this.books = res;
    })
  }

}
