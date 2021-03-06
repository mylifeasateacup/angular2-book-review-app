import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`Wow, this book was rated a ${this.rating}!`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
}