import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDetailsService {

    constructor(private _http: HttpClient) {
    }

    public getUserDetails(id: number) {
        return this._http.get("https://jsonplaceholder.typicode.com/posts?userId="+id);
    }
}