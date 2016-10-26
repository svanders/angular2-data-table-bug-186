import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { routing, appRoutingProviders }  from './app.routes';
import { Angular2DataTableModule } from 'angular2-data-table';
import { Service } from './app.service';
import { AppComponent } from './app.component';
import { DashComponent } from "./dash.component";
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Angular2DataTableModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashComponent
    ],
    providers: [
        appRoutingProviders,
        Service
    ]
    ,bootstrap: [ AppComponent ]
})

export class AppModule {

}
