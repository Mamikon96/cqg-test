import {Component, Input, OnInit} from '@angular/core';
import {Contract} from '../../models/contract';
import {ContractsService} from '../../services/contracts.service';
import {ContractQuote} from '../../models/contract-quote';
import {Subscription} from 'rxjs';
import {QuotesService} from '../../services/quotes.service';
import {PageEvent} from '@angular/material/paginator';
import {Quote} from '../../models/quote';

@Component({
    selector: 'cqg-contracts-list',
    templateUrl: './contracts-list.component.html'
})
export class ContractsListComponent implements OnInit {

    @Input() detailedMode: boolean;

    public displayedContracts: Contract[];
    public quotes = new Map();
    public averages = new Map();
    public tempQuotes: Quote[] = [];

    public _contracts: Contract[];

    public _pageSize = 10;
    public _pageSizeOptions: number[] = [5, 10, 25, 50];
    public _pageIndex = 0;

    private contractsSub: Subscription;
    private quotesSub: Subscription;
    private page = 0;


    constructor(private contractsService: ContractsService,
                private quotesService: QuotesService) {
    }

    ngOnInit(): void {
        this.contractsSub = this.contractsService.contracts$.subscribe((contracts: Contract[]) => {
            this._contracts = contracts;
            this.updateContent();
        });
        this.quotesSub = this.quotesService.quotes$.subscribe((quotes: ContractQuote[]) => {
            quotes.reduce((prev, curr) => {
                this.quotes.set(curr.contractId, curr.quote);

                const average = this.averages.get(curr.contractId);
                this.averages.set(curr.contractId, this.getNewAverage(average, curr.quote));
                return [];
            }, {});
        });
    }

    public pageEventHandler(event: PageEvent): void {
        this._pageSize = event.pageSize;
        this.page = event.pageIndex;
        this._pageIndex = event.pageIndex;
        this.updateContent();
    }

    private getNewAverage(average: number, quote: Quote): number {
        const firstItem = this.tempQuotes.shift();
        this.tempQuotes.push(quote);
        return average
            - (firstItem.price * firstItem.volume) / 1000
            + (quote.price * quote.volume) / 1000;
    }

    private updateContent(): void {
        this.displayedContracts = this._contracts.slice(this.page * this._pageSize, (this.page + 1) * this._pageSize);
        this.displayedContracts.forEach(contract => {
            for (let i = 0; i < 1000; i++) {
                this.tempQuotes.push({
                    price: 0,
                    volume: 0
                });
                this.averages.set(contract.id, 0);
            }
        });
    }
}
