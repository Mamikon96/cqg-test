import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Contract} from '../models/contract';

@Injectable({
    providedIn: 'root'
})
export class ContractsService {

    private contractsSubject = new BehaviorSubject<Contract[]>([]);
    public contracts$ = this.contractsSubject.asObservable();

    constructor() {
        this.send(4900);
        // this.send(1);
    }

    private send(count: number): void {
        this.contractsSubject.next(this.generateContracts(count));
    }

    private generateContracts(count: number): Contract[] {
        const contracts: Contract[] = [];
        for (let i = 0; i < count; i++) {
            contracts.push({
                id: 'i-' + Math.random(),
                name: 'Contract ' + (Math.random() * 1000).toFixed(0)
            });
        }
        return contracts;
    }
}
