import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-item-details',
  templateUrl: './book-item-details.component.html',
  styleUrls: ['./book-item-details.component.sass']
})
export class BookItemDetailsComponent implements OnInit {

  @Input() bookItem:Book;
  @Output() openEditbookItem: EventEmitter<Book>=new EventEmitter();
  @Output() deleteBookItem: EventEmitter<Book>= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

openEdit(b:Book){
  this.openEditbookItem.emit(b);
}

deleteItem(b:Book)
{
this.deleteBookItem.emit(b);
}
}
