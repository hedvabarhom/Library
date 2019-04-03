import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-item-edit',
  templateUrl: './book-item-edit.component.html',
  styleUrls: ['./book-item-edit.component.sass']
})
export class BookItemEditComponent implements OnInit {

  @Input() curretBookInput: Book;
  @Output() cancelBookOutput: EventEmitter<Book> = new EventEmitter();
  @Output() updateBookOutput: EventEmitter<Book> = new EventEmitter();
  isAdd:Boolean = false;

  constructor(private s:BooksService) { }

  ngOnInit() {

    if (!this.curretBookInput) {
  this.isAdd = true;
  this.curretBookInput = new Book();
}
}


  cancelBook()
  {
    this.cancelBookOutput.emit(this.curretBookInput);
  }

  updateBook()
  {
    if (this.isAdd){
    this.s.addBook(this.curretBookInput);

  } else{
    this.s.updateBook(this.curretBookInput);
    this.updateBookOutput.emit(this.curretBookInput);
   }
  }

}
