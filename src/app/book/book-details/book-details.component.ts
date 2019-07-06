import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

    @Input() item: Book;
    @Input('bookTitle') title: string;
    @Output('bookTitleChange') titleChange = new EventEmitter<string>();
    @Input() titleColor: string;

    editTitleHidden = true;

    constructor() { }

    ngOnInit() {
    }

    titleChanged() {
        this.titleChange.emit(this.title);
    }
}
