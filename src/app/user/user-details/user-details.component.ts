import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            console.log(params.get('id'));
            this.id = params.get('id');
        });
    }

}
