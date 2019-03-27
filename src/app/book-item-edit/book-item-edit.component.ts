import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-item-edit',
  templateUrl: './book-item-edit.component.html',
  styleUrls: ['./book-item-edit.component.sass']
})
export class BookItemEditComponent implements OnInit {

  @Input() curretBookEdit: Book;
  @Output() cancelEditBookItem: EventEmitter<Book> = new EventEmitter();
  @Output() saveEditBookItem: EventEmitter<Book> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancelEdit(b:Book)
  {
    this.cancelEditBookItem.emit(b);
  }

  saveItem()
  {
    this.saveEditBookItem.emit(this.curretBookEdit);
  }

  onInputChange(e)
  {
    let name = e.currentTarget.id;
    this.curretBookEdit[name] = e.currentTarget.value;

  }
}
