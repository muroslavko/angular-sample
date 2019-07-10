import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
//     {
//     providedIn: 'root'
// }
)

export class BookService {

    constructor(private http: HttpClient) { }


    getBooks(): Observable<Book[]> {
        // return [{
        //     author: 'Stephen Edwin King',
        //     description: 'Jake Epping is a recently divorced high school English teacher in Lisbon Falls, Maine, earning extra money teaching a GED class.',
        //     publishedDate: new Date(2011, 11, 8),
        //     title: '11/22/63'
        // }, {
        //     author: 'J. R. R. Tolkien',
        //     description: 'The Hobbit is set within Tolkien`s fictional universe and follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.',
        //     publishedDate: new Date(1937, 9, 21),
        //     title: 'The Hobbit, or There and Back Again'
        // }];
        return this.http.get<Book[]>('http://openlibrary.org/query.json?type=/type/edition&*=');
    }
}
