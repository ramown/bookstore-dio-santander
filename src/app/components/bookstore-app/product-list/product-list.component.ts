import { Component, Input, OnInit } from '@angular/core';
import { Book } from './model/book';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() books: Book[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
