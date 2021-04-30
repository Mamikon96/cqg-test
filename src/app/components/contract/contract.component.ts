import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Contract} from '../../models/contract';
import {Quote} from '../../models/quote';

@Component({
    selector: 'cqg-contract',
    templateUrl: './contract.component.html'
})
export class ContractComponent implements OnInit {

    @Input() detailedMode: boolean;
    @Input() contract: Contract;
    @Input() quote: Quote;
    @Input() average: number;


    constructor() {
    }

    ngOnInit(): void {
    }
}
