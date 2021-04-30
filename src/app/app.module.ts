import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {ContractsListComponent} from './components/contracts-list/contracts-list.component';
import {ContractComponent} from './components/contract/contract.component';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ContractsListComponent,
        ContractComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
