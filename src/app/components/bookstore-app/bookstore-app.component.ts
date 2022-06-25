import { Component, OnInit } from '@angular/core';
import { Book } from './product-list/model/book';
import { ProductService } from './product-list/services/product.service';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {

  books:Book[] = [];
  rangeFilter = {
    from: 0,
    to: 0
  }

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  
  filterBooksByPrice(e:any){
    this.getBooks(e);
  }
  
  getBooks(e={from:0,to:0}) {
    this.service.getBooks().subscribe(res => {
      this.books = res;
      if(e.from === 0 && e.to === 0) {
        return;
      } else {
        this.books = this.books.filter(b => (b.price >= e.from && b.price <= e.to))
      }
    })
  }

}
