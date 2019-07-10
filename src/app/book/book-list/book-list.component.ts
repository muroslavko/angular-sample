import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
	selector: 'book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

	constructor() { }

	title = 'Books to read';

    @Input('books') booksList: Book[];
    @Output() itemSelected =  new EventEmitter<number>();

	ngOnInit() {

    }
    
    bookSelected(index: number){
        this.itemSelected.emit(index);
    }
}
