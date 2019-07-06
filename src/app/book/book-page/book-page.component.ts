import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
	selector: 'app-book-page',
	templateUrl: './book-page.component.html',
	styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

	hideCreateBook = true;
	constructor() { }

	ngOnInit() {
	}

	addNewBook(newBook: Book) {
		console.log('This is new book', newBook);
	}
}
