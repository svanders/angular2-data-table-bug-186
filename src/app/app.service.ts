import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class Task {
    name:string;
    id:number;
    assignee:string;
    created:string;
    serial:string;
    meterType:string;
}

@Injectable()
export class Service {
    public rowsPerPage:number = 4;
    public baseUrl:string = "http://localhost:9191/"
    constructor(private http:Http) {}


    getAll() {
        return this.http.get(this.baseUrl + "rest-url")
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
