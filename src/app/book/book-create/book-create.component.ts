import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/models/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-book-create',
	templateUrl: './book-create.component.html',
    styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit, OnChanges {

	@Input() book: Book = {} as Book;
	@Output() bookChange = new EventEmitter<Book>();
    bookForm: FormGroup;

	constructor() { }

	ngOnInit() {
        this.bookForm = new FormGroup({
            'title': new FormControl(this.book.title, [
                Validators.required,
                Validators.minLength(4)
            ]),
            'description': new FormControl(this.book.description),
            'subtitle': new FormControl(this.book.subtitle,                [
                Validators.required,
                Validators.minLength(4)
            ]),
            'publish_date': new FormControl(this.book.publish_date,[
                Validators.required
            ]) ,
        });
	}

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
        if(changes.book && this.bookForm){
            this.bookForm.setValue(changes.book.currentValue)
        }
    }


	saveBook() {
        console.log('Emit event');
        let newBook = this.bookForm.value
        newBook.publish_date = new Date(newBook.publish_date);
        this.bookChange.emit(newBook);
        this.bookForm.reset();
    }
    
    revert(){
        this.bookForm.reset();
    }
}
