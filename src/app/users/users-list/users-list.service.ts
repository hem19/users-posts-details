import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersListService {

    constructor(private _http: HttpClient) {
    }

    public getUsersList() {
        return this._http.get("https://jsonplaceholder.typicode.com/users");
    }
}