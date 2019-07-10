import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
	selector: 'app-book-create',
	templateUrl: './book-create.component.html',
	styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit {

	@Input() book: Book = {} as Book;
	@Output() bookChange = new EventEmitter<Book>();

	constructor() { }

	ngOnInit() {
	}


	saveBook() {
		console.log('Emit event');
        this.bookChange.emit(this.book);
	}
}
