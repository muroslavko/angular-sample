import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
	selector: 'app-book-page',
	templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css'],
    providers: [BookService]
})
export class BookPageComponent implements OnInit {

	hideCreateBook = true;
    books: Book[];
    selectedBook: Book = {} as Book;
    selectedBookIndex: number = -1;
	constructor(private bookService: BookService) { }

	ngOnInit() {
        this.books = this.bookService.getBooks();
    }
    
    showEdit() {
        if (this.hideCreateBook) {
            this.selectedBookIndex = -1;
        } 
        this.selectedBook = {
            author: '',
            description: '',
            publishedDate: new Date(),
            title: ''
        };
        this.hideCreateBook = !this.hideCreateBook;
    }

    save(newBook: Book){
        if(this.selectedBookIndex === -1){
            this.books.push(newBook);
        } else {
            this.books[this.selectedBookIndex] = newBook;
        }
        this.selectedBookIndex = -1;
        this.hideCreateBook = true;
    }
    
    select(index: number){
        this.selectedBook = Object.assign({}, this.books[index]);
        this.selectedBookIndex = index;
        this.hideCreateBook = false;
        console.log(this.selectedBook)
    }
}
