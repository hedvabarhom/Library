import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  public books: Book[];
  public currentBook : Book;

  constructor() {
    this.books =  [
      {
        author: 'Suzanne Collins',
        date: new Date('4/5/1813'),
        title: 'the Hunger Games',
      },
      {
        author: 'jane Austen',
        date: new Date('4/5/1981'),
        title: 'pride and Prejudice',
      },
      {
        author: 'George Orwell',
        date: new Date('4/5/1991'),
        title: 'animal Farm',
      }
      ];

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

    saveBookItem(b:Book)
    {
      let bookInList :Book = this.books.find(x => x === b);
      bookInList  = b;
      this.currentBook = null;
    }

    deleteItem(b:Book)
    {
      const index = this.books.indexOf(b, 0);
      if (index > -1) {
        this.books.splice(index, 1);
      }

    }
}
