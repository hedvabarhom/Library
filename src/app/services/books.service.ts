import { Injectable } from '@angular/core';
import { Book } from '../book';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private books: Book[];

  constructor() {
    this.fillBooks();
  }

  fillBooks() {
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

  getBooks() {
    return this.books;
  }

  addBook(b:Book) {
    this.books.push(b);
  }

  updateBook(b:Book) {
    let bookInList : Book = this.books.find(x => x === b);
    bookInList  = b;
  }

  deleteBook(b:Book) {
    const index = this.books.indexOf(b, 0);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

}
