import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
	selector: 'book-details',
	templateUrl: './book-details.component.html',
	styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

	@Input() item: Book;
	@Input() titleColor: string;

	constructor() { }

	ngOnInit() {
	}
}
