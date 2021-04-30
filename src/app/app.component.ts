import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    public detailedMode = false;

    modeHandler($event: boolean): void {
        this.detailedMode = $event;
    }
}
