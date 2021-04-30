import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ContractQuote} from '../models/contract-quote';
import {ContractsService} from './contracts.service';
import {Contract} from '../models/contract';

@Injectable({
    providedIn: 'root'
})
export class QuotesService {

    private contracts: Contract[] = [];

    private quotesSubject = new BehaviorSubject<ContractQuote[]>([]);
    public quotes$ = this.quotesSubject.asObservable();

    constructor(private contractsService: ContractsService) {
        // this.send(15);
        this.contractsService.contracts$.subscribe((contracts: Contract[]) => {
            this.contracts = contracts;
            this.send(contracts);
        });

        setInterval(() => this.send(this.contracts), 300);
    }

    private send(contracts: Contract[]): void {
        this.quotesSubject.next(this.updateQuotes(contracts));
    }

    private updateQuotes(contracts: Contract[]): ContractQuote[] {

        const quotes: ContractQuote[] = [];
        contracts.forEach(contract => {
            quotes.push({
                contractId: contract.id,
                quote: {
                    price: +(Math.random() * 100).toFixed(2),
                    volume: Math.floor(Math.random() * 10)
                }
            });
        });
        return quotes;
    }
}
