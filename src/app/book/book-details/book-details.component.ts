import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy, OnChanges {

    @Input() item: Book;
    @Input('index') itemIndex: number;
    @Input() titleColor: string;
    @Output() itemSelected =  new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
        console.log('BookDetailsComponent init')
    }

    bookSelected(){
        this.itemSelected.emit(this.itemIndex);
        // console.log(this.itemIndex);
    }


    ngOnChanges(changes: SimpleChanges): void {
        console.log('BookDetailsComponent ngOnChanges', changes)
    }
    ngOnDestroy(): void {
        console.log('BookDetailsComponent ngOnDestroy')
    }
}
