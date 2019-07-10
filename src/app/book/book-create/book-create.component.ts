import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
	selector: 'app-book-create',
	templateUrl: './book-create.component.html',
	styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit {

	@Output() newBook = new EventEmitter<Book>();

	book: Book = {
		author: '',
		description: '',
		publishedDate: new Date(),
		title: ''
	};

	constructor() { }

	ngOnInit() {
	}


	saveBook() {
		console.log('Emit event');
        this.newBook.emit(this.book);
        this.book = {
            author: '',
            description: '',
            publishedDate: new Date(),
            title: ''
        };
	}
}
