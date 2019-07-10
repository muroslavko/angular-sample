import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-book-page',
	templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css'],
    providers: [BookService]
})
export class BookPageComponent implements OnInit {

	hideCreateBook = true;
    books: Book[] = [];
    selectedBook: Book = {} as Book;
    selectedBookIndex: number = -1;
	constructor(private bookService: BookService) { }

	ngOnInit() {
        this.bookService.getBooks().pipe(map(x => {
            x = x.map(b => {
                b.publish_date = new Date(b.publish_date);
                if(!b.description || !b.description.value){
                    b.description = { value: "No description" }
                }
                return b;
            })
            return x;
        })).subscribe(x => {
            this.books = x;
        }, (error) => {
            console.log(error)
        });
    }
    
    showEdit() {
        if (this.hideCreateBook) {
            this.selectedBookIndex = -1;
        } 
        this.selectedBook = {
            subtitle: '',
            description : { 
                value: ''
             },
            publish_date: new Date(),
            title: ''
        } as Book;
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

    select(index: number) {
        let book = this.books[index];
        this.selectedBook = {
            subtitle: book.subtitle || '',
            description: {
                value: book.description.value
            },
            publish_date: book.publish_date || new Date(),
            title: book.title
        } as Book;
        this.selectedBookIndex = index;
        this.hideCreateBook = false;
        console.log(this.selectedBook)
    }
}
