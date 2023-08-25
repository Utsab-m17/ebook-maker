import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { HomeComponent } from './components/admin/home/home.component';
import { AuthorVerificationComponent } from './components/admin/author-verification/author-verification.component';
import { BookVerificationComponent } from './components/admin/book-verification/book-verification.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CreateEbooksComponent } from './components/admin/create-ebooks/create-ebooks.component';
import { ViewEbookComponent } from './components/admin/view-ebook/view-ebook.component';
import { MyBooksComponent } from './components/author/my-books/my-books.component';
import { CreatebookComponent } from './components/author/createbook/createbook.component';
import { AuthorInputComponent } from './components/author/author-input/author-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthorVerificationComponent,
    BookVerificationComponent,
    CreateEbooksComponent,
    ViewEbookComponent,
    MyBooksComponent,
    CreatebookComponent,
    AuthorInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
