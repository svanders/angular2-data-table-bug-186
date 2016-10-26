import { Component } from '@angular/core';
import {HttpModule} from "@angular/http";
import { Service } from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: '/app.component.html',
    providers: [HttpModule, Service]
})
export class AppComponent {
}
