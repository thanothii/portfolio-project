import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PhotolioComponent } from './photolio/photolio.component';
import { BandComponent } from './band/band.component';
import { ArtComponent } from './art/art.component';
import { CateringComponent } from './catering/catering.component';
import { HomeComponent } from './home/home.component';
// import { BooksComponent } from './books/books.component';
// import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PhotolioComponent,
    BandComponent,
    ArtComponent,
    CateringComponent,
    HomeComponent,
    // BooksComponent,
    // BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
