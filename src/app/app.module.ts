import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { ZoomDirective } from './directive/zoom.directive';

@NgModule({
  declarations: [
	AppComponent,
	BookListComponent,
	BookDetailsComponent,
	BookCreateComponent,
	BookPageComponent,
	ZoomDirective
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
