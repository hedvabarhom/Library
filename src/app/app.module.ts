import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemDetailsComponent } from './book-item-details/book-item-details.component';
import { BookItemEditComponent } from './book-item-edit/book-item-edit.component';
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookItemDetailsComponent,
    BookItemEditComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
