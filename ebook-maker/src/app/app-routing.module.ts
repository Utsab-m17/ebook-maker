import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { AuthorVerificationComponent } from './components/admin/author-verification/author-verification.component';
import { BookVerificationComponent } from './components/admin/book-verification/book-verification.component';
import { CreateEbooksComponent } from './components/admin/create-ebooks/create-ebooks.component';
import { ViewEbookComponent } from './components/admin/view-ebook/view-ebook.component';
import { MyBooksComponent } from './components/author/my-books/my-books.component';
import { AuthorInputComponent } from './components/author/author-input/author-input.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'author-verification', component: AuthorVerificationComponent },
  { path: 'book-verification', component: BookVerificationComponent },
  { path: 'create-ebooks', component: CreateEbooksComponent },
  { path: 'view-ebook/:bookId', component: ViewEbookComponent },
  { path: 'book-dashboard/:authorId', component: MyBooksComponent },
  { path: 'author-input', component: AuthorInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
