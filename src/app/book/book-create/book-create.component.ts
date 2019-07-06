import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
	selector: 'app-book-create',
	templateUrl: './book-create.component.html',
	styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit {

	newBook: Book ={
		author: '',
		description: '',
		publishedDate: new Date(),
		title: ''
	};

	constructor() { }

	ngOnInit() {
	}


	saveBook() {
		console.log(this.newBook);
	}
}
