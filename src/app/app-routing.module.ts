import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookItemEditComponent } from './book-item-edit/book-item-edit.component';

const routes: Routes = [
   { path: 'Home', component: HomeComponent },
   { path: 'BookLibrary', component: BooksListComponent },
   { path: 'AddBook', component: BookItemEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
