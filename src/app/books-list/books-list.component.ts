import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  public books: Book[];
  public currentBook : Book;

  constructor(private s: BooksService) {
    this.books = s.getBooks();
   }

  ngOnInit() {
  }

  openEdit(b:Book){
    this.currentBook = b;
    }

    cancelEdit(b:Book)
    {
      this.currentBook = null;
    }

    updateBook(b:Book)
    {
      this.currentBook = null;
    }

    deleteItem(b:Book)
    {
      this.s.deleteBook(b);
    }
}
