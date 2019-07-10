import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
	selector: 'app-book-page',
	templateUrl: './book-page.component.html',
	styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

	hideCreateBook = true;
    books: Book[];
    selectedBook: Book = {} as Book;
    selectedBookIndex: number = -1;
	constructor() { }

	ngOnInit() {
        this.books = [{
            author: 'Stephen Edwin King',
            description: 'Jake Epping is a recently divorced high school English teacher in Lisbon Falls, Maine, earning extra money teaching a GED class.',
            publishedDate: new Date(2011, 11, 8),
            title: '11/22/63'
        },{
            author: 'J. R. R. Tolkien',
            description: 'The Hobbit is set within Tolkien`s fictional universe and follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.',
            publishedDate: new Date(1937, 9, 21),
            title: 'The Hobbit, or There and Back Again'
        }]
    }
    
    showEdit() {
        if (this.hideCreateBook) {
            this.selectedBook = {} as Book;
            this.selectedBookIndex = -1;
        } else {
            this.selectedBook = {
                author: '',
                description: '',
                publishedDate: new Date(),
                title: ''
            };
        }
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
