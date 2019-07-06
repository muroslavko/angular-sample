import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
	selector: 'book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

	constructor() { }

	title = 'Books to read';

	book: Book = {
		author: 'Stephen Edwin King',
		description: 'Jake Epping is a recently divorced high school English teacher in Lisbon Falls, Maine, earning extra money teaching a GED class.',
		publishedDate: new Date(2011, 11, 8),
		title: '11/22/63'
	};

	ngOnInit() {
	}
}
