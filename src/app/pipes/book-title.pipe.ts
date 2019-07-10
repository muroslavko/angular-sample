import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
    name: 'bookTitle'
})
export class BookTitlePipe implements PipeTransform {

    transform(value: Book, args?: any): any {
        if (value) {
            return `${value.title} (${value.publish_date.getFullYear()})`;
        }

        return '';
    }

}
