import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'cqg-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public isChecked = false;
    @Output() modeChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleMode(): void {
        this.isChecked = !this.isChecked;
        this.modeChangeEvent.emit(this.isChecked);
    }
}
